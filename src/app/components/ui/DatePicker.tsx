"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  date?: Date
  dateRange?: { from: Date | undefined; to?: Date | undefined }
  onDateChange?: (date: Date | undefined) => void
  onDateRangeChange?: (range: { from: Date | undefined; to?: Date | undefined } | undefined) => void
  placeholder?: string
  label?: string
  disabled?: boolean
  size?: 'sm' | 'default' | 'lg' | 'xl'
  fontFamily?: 'alata' | 'almarai' | 'default'
  className?: string
  labelClassName?: string
  isRoundTrip?: boolean
}

export function DatePicker({
  date,
  dateRange,
  onDateChange,
  onDateRangeChange,
  placeholder = "Pick a date",
  label,
  disabled = false,
  size = 'default',
  fontFamily = 'almarai',
  className,
  labelClassName,
  isRoundTrip = false,
}: DatePickerProps) {
  // Get current date and end of year
  const today = new Date()
  const endOfYear = new Date(today.getFullYear(), 11, 31) // December 31st of current year

  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    default: 'h-9 px-4 py-2',
    lg: 'h-10 px-6 py-3 text-base',
    xl: 'h-12 px-8 py-4 text-lg',
  };

  // Format display text based on trip type
  const getDisplayText = () => {
    if (isRoundTrip && dateRange) {
      if (dateRange.from && dateRange.to) {
        return `${format(dateRange.from, "MMM dd")} - ${format(dateRange.to, "MMM dd, yyyy")}`
      } else if (dateRange.from) {
        return `${format(dateRange.from, "MMM dd, yyyy")} - Select return`
      }
      return placeholder
    } else if (!isRoundTrip && date) {
      return format(date, "MMM dd, yyyy")
    }
    return placeholder
  }

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
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            disabled={disabled}
            className={cn(
              "ml-[-10px] w-full justify-start text-left font-normal border-0 bg-transparent hover:bg-transparent focus:bg-transparent",
              sizeClasses[size],
              (!date && !dateRange?.from) && "text-muted-foreground",
              className
            )}
            style={{ fontFamily: `var(--font-${fontFamily})` }}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>{getDisplayText()}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-auto p-0" 
          align="start"
          sideOffset={4}
        >
          {isRoundTrip ? (
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={onDateRangeChange}
              disabled={(date) => {
                // Disable dates before today and after end of year
                return date < today || date > endOfYear
              }}
              numberOfMonths={1}
              initialFocus
            />
          ) : (
            <Calendar
              mode="single"
              selected={date}
              onSelect={onDateChange}
              disabled={(date) => {
                // Disable dates before today and after end of year
                return date < today || date > endOfYear
              }}
              initialFocus
            />
          )}
        </PopoverContent>
      </Popover>
    </div>
  )
} 