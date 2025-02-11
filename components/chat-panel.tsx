'use client'

import { Mic, Upload } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react'
import Textarea from 'react-textarea-autosize'
import { ModelSelector } from './model-selector'
import { SearchModeToggle } from './search-mode-toggle'
import { Button, buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { Message } from 'ai';
import { EmptyScreen } from './empty-screen';
import { ArrowUp, MessageCirclePlus, Square } from 'lucide-react';
interface ChatPanelProps {
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isLoading: boolean
  messages: Message[]
  setMessages: (messages: Message[]) => void
  query?: string
  stop: () => void
  append: (message: any) => void
}
export function ChatPanel({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  messages,
  setMessages,
    query,
  stop,
  append
}: ChatPanelProps) {

  const [showEmptyScreen, setShowEmptyScreen] = useState(false)
  const router = useRouter()
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const isFirstRender = useRef(true)
  const [isComposing, setIsComposing] = useState(false) // Composition state
  const [isRecording, setIsRecording] = useState(false) // Recording state

  const [enterDisabled, setEnterDisabled] = useState(false) // Disable Enter after composition ends
  const searchParams = useSearchParams()

  const handleCompositionStart = () => setIsComposing(true)

  const handleCompositionEnd = () => {
    setIsComposing(false)
    setEnterDisabled(true)
    setEnterDisabled(false);
  };

  const handleVoiceToText = async () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false)
    } else {
      // Start recording
      setIsRecording(true)
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        const mediaRecorder = new MediaRecorder(stream)
        const audioChunks: Blob[] = []

        mediaRecorder.addEventListener('dataavailable', event => {
          audioChunks.push(event.data)
        })

        mediaRecorder.addEventListener('stop', async () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' })
          const formData = new FormData()
          formData.append('audio', audioBlob)

          // Assume you have a backend API to handle audio transcription
          const response = await fetch('/api/transcribe', {
            method: 'POST',
            body: formData
          })

          if (!response.ok) {
            return
          }

          const data = await response.json()
          const transcribedText = data.transcription

          // Insert the transcribed text into the textarea
          const updatedText = input + transcribedText
          handleInputChange({
            target: { value: updatedText }
          } as React.ChangeEvent<HTMLTextAreaElement>)
        })

        mediaRecorder.start()

        // Stop recording after a certain amount of time (e.g., 5 seconds)
        setTimeout(() => {
          mediaRecorder.stop()
        }, 5000)
      } catch (error) {
      }
    }
    setIsRecording(false);
  }

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
      }
  };

const handleNewChat = () => {
    setMessages([])
    router.push('/')
  }

// if query is not empty, submit the query
  useEffect(() => {
    if (isFirstRender.current && query && query.trim().length > 0) {
      append({
        role: 'user',
        content: query
      })
      isFirstRender.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <div
      className={cn(
        'mx-auto w-full',
        messages.length > 0
          ? 'fixed bottom-0 left-0 right-0 bg-background'
          : 'fixed bottom-8 left-0 right-0 top-6 flex flex-col items-center justify-center'
          
      )}
      >
        <form
        onSubmit={handleSubmit}
        className={cn(
          'max-w-3xl w-full mx-auto',
          messages.length > 0 ? 'px-2 py-4' : 'px-6'
        )}
      >
        <div className="relative flex flex-col w-full gap-2 bg-muted rounded-3xl border border-input">
          <Textarea
            ref={inputRef}
            name="input"
            rows={2}
            maxRows={5}
            tabIndex={0}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
            placeholder="Ask a question..."
            spellCheck={false}
            value={input}
            className="resize-none w-full min-h-12 bg-transparent border-0 px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            onChange={e => {
              handleInputChange(e)
              setShowEmptyScreen(e.target.value.length === 0)
            }}
            onKeyDown={e => {
              if (
                e.key === 'Enter' && // Check if the pressed key is Enter
                !e.shiftKey &&// Check if Shift key is NOT pressed
                !isComposing && // Check if composition is NOT in progress
                !enterDisabled // Check if Enter key is NOT disabled
              ) { 
                if (input.trim().length === 0) {
                  e.preventDefault()
                  return
                }
                e.preventDefault()
                const textarea = e.target as HTMLTextAreaElement
                textarea.form?.requestSubmit()
              }
            }}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
          <Button
            type="button"
            variant={'ghost'}
            className="p-1 rounded-full"
            aria-label="Voice to Text"
            onClick={handleVoiceToText}
          >
            {isRecording ? (
              <Square className="w-5 h-5" />
            ) : (
              <Mic className="w-5 h-5" />
            )}
          </Button>

          <input
            type="file"
            id="image-upload"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <label htmlFor="image-upload">
              <Button
              type="button"
              variant={'ghost'}
              className="p-1 rounded-full"
              aria-label="Upload Image"
            >
              <Upload className="w-5 h-5" />
              </Button>
          </label>
        </div>

       <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <ModelSelector />
            <SearchModeToggle />
          </div>
          <div className="flex items-center gap-2">
            {messages.length > 0 && (
              <Button
                variant="outline"
                size="icon"
                onClick={handleNewChat}
                className="shrink-0 rounded-full group"
                type="button"
                disabled={isLoading}
              >
                <MessageCirclePlus className="size-4 group-hover:rotate-12 transition-all" />
              </Button>
            )}
              <Button
                type={isLoading ? 'button' : 'submit'}
                size={'icon'}
                variant={'outline'}
                className={cn(isLoading && 'animate-pulse','rounded-full')}
                disabled={(input.length === 0 && !isLoading)}
                 onClick={isLoading ? stop : undefined}
              >
                {isLoading ? <Square size={20} /> : <ArrowUp size={20} />}
            </Button>
          </div>
        </div>
        </div>

        {messages.length === 0 && (
          <EmptyScreen
            submitMessage={message => {
              handleInputChange({
                target: { value: message }
              } as React.ChangeEvent<HTMLTextAreaElement>)
            }}
            className={cn(showEmptyScreen ? 'visible' : 'invisible')}
          />
        )}
      </form>
    </div>
  );
}
