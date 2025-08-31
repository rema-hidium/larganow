"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface LargaNowCheckboxProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  label?: string
  disabled?: boolean
  size?: 'sm' | 'default' | 'lg' | 'xl'
  fontFamily?: 'alata' | 'almarai' | 'default'
  className?: string
  labelClassName?: string
  checkboxClassName?: string
  id?: string
}

export function LargaNowCheckbox({
  checked = false,
  onCheckedChange,
  label,
  disabled = false,
  size = 'default',
  fontFamily = 'almarai',
  className,
  labelClassName,
  checkboxClassName,
  id,
}: LargaNowCheckboxProps) {
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    default: 'h-9 px-4 py-2',
    lg: 'h-10 px-6 py-3 text-base',
    xl: 'h-12 px-8 py-4 text-lg',
  };

  const checkboxSizeClasses = {
    sm: 'w-4 h-4',
    default: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
  };

  const generatedId = React.useId();
  const checkboxId = id || `checkbox-${generatedId}`;

  return (
    <div className={cn("w-full flex flex-col", className)}>
      <div className={cn(
        "flex items-center space-x-2",
        sizeClasses[size],
        className
      )}>
        <input
          type="checkbox"
          id={checkboxId}
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          disabled={disabled}
          className={cn(
            "rounded border-gray-300 text-primary focus:ring-primary focus:ring-2",
            checkboxSizeClasses[size],
            checkboxClassName
          )}
          style={{ fontFamily: `var(--font-${fontFamily})` }}
        />
        {label && (
          <label className={cn(
            "block text-sm font-bold text-gray-700 mb-1",
            labelClassName
          )}>
            {label}
          </label>
        )}
      </div>
    </div>
  );
}
