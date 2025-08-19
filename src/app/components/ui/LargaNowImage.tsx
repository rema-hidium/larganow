"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface LargaNowImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  size?: 'sm' | 'default' | 'lg' | 'xl' | 'custom'
  width?: number
  height?: number
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  loading?: 'lazy' | 'eager'
  onLoad?: () => void
  onError?: () => void
  fallbackSrc?: string
}

export function LargaNowImage({
  src,
  alt,
  className,
  containerClassName,
  size = 'default',
  width,
  height,
  objectFit = 'contain',
  loading = 'lazy',
  onLoad,
  onError,
  fallbackSrc
}: LargaNowImageProps) {
  const [imageSrc, setImageSrc] = React.useState(src)
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  const sizeClasses = {
    sm: 'w-16 h-16',
    default: 'w-32 h-32',
    lg: 'w-40 h-40',
    xl: 'w-48 h-48',
    custom: ''
  }

  const objectFitClasses = {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down'
  }

  React.useEffect(() => {
    setImageSrc(src)
    setIsLoading(true)
    setHasError(false)
  }, [src])

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc)
    }
    
    onError?.()
  }

  const customStyles = size === 'custom' && (width || height) ? {
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined
  } : {}

  return (
    <div 
      className={cn(
        "relative overflow-hidden",
        size !== 'custom' && sizeClasses[size],
        containerClassName
      )}
      style={customStyles}
    >
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error state */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-xs">Image not found</p>
          </div>
        </div>
      )}

      {/* Image */}
      <img
        src={imageSrc}
        alt={alt}
        className={cn(
          "w-full h-full transition-opacity duration-300",
          objectFitClasses[objectFit],
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}
