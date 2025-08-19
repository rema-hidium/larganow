"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input, InputProps } from "@/components/ui/input"

interface LargaNowInputProps extends Omit<InputProps, 'size'> {
  label?: string
  variant?: 'default' | 'bottom'
  size?: 'sm' | 'default' | 'lg' | 'xl'
  fontFamily?: 'alata' | 'almarai' | 'default'
  className?: string
  labelClassName?: string
  inputClassName?: string
}

export function LargaNowInput({
  label,
  variant = 'bottom',
  size = 'default',
  fontFamily = 'almarai',
  className,
  labelClassName,
  inputClassName,
  ...props
}: LargaNowInputProps) {
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    default: 'h-9 px-4 py-2',
    lg: 'h-10 px-6 py-3 text-base',
    xl: 'h-12 px-8 py-4 text-lg',
  };

  return (
    <div className="w-full flex flex-col">
      {label && (
        <label className={cn(
          "block text-sm font-bold text-gray-700 mb-1",
          labelClassName
        )}>
          {label}
        </label>
      )}
      <Input
        variant={variant}
        className={cn(
          sizeClasses[size],
          inputClassName,
          className
        )}
        style={{ fontFamily: `var(--font-${fontFamily})` }}
        {...props}
      />
    </div>
  )
}
