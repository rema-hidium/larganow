"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

interface TripTypeOption {
  value: string
  label: string
}

interface TripTypeRadioProps {
  value?: string
  onValueChange?: (value: string) => void
  options?: TripTypeOption[]
  label?: string
  disabled?: boolean
  size?: 'sm' | 'default' | 'lg' | 'xl'
  fontFamily?: 'alata' | 'almarai' | 'default'
  className?: string
  labelClassName?: string
}

export function TripTypeRadio({
  value,
  onValueChange,
  options = [
    { value: 'round-trip', label: 'Round Trip' },
    { value: 'one-way', label: 'One Way' },
  ],
  label = "Choose way:",
  disabled = false,
  size = 'default',
  fontFamily = 'almarai',
  className,
  labelClassName,
}: TripTypeRadioProps) {
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
          "block text-sm font-medium text-gray-700 mb-1",
          labelClassName
        )}>
          {label}
        </label>
      )}
      <div className={cn(
        "w-full px-4 py-3 rounded-lg bg-transparent",
        sizeClasses[size],
        className
      )}>
        <RadioGroup
          value={value}
          onValueChange={onValueChange}
          disabled={disabled}
          className="flex items-center space-x-4 ml-[-15px]"
          style={{ fontFamily: `var(--font-${fontFamily})` }}
        >
          {options.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem
                value={option.value}
                id={option.value}
                className="text-primary border-gray-300 focus:ring-primary focus:ring-2"
              />
              <label
                htmlFor={option.value}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {option.label}
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
} 