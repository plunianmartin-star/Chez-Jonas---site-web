'use client'

import { useEffect } from 'react'

/**
 * The Elfsight reviews widget uses ResizeObserver internally, which throws the
 * benign "ResizeObserver loop completed with undelivered notifications" error.
 * It doesn't break anything, but Next.js surfaces it in the dev overlay.
 * This component swallows only that specific harmless error.
 */
export function ResizeObserverErrorSuppressor() {
  useEffect(() => {
    const isResizeObserverError = (message: unknown) =>
      typeof message === 'string' &&
      (message.includes('ResizeObserver loop completed with undelivered notifications') ||
        message.includes('ResizeObserver loop limit exceeded'))

    const handleError = (event: ErrorEvent) => {
      if (isResizeObserverError(event.message)) {
        event.stopImmediatePropagation()
        event.preventDefault()
      }
    }

    window.addEventListener('error', handleError)
    return () => window.removeEventListener('error', handleError)
  }, [])

  return null
}
