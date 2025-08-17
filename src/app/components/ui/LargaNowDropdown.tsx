'use client';

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface LargaNowDropdownProps {
  options: DropdownOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  size?: 'sm' | 'default' | 'lg' | 'xl';
  fontFamily?: 'alata' | 'almarai' | 'default';
  className?: string;
  triggerClassName?: string;
  contentClassName?: string;
  labelClassName?: string;
}

export function LargaNowDropdown({
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
  label,
  disabled = false,
  size = 'default',
  fontFamily = 'almarai',
  className,
  triggerClassName,
  contentClassName,
  labelClassName,
}: LargaNowDropdownProps) {
  const selectedOption = options.find(option => option.value === value);

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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            disabled={disabled}
            className={cn(
              "ml-[-10px] w-full justify-between font-almarai border-0 bg-transparent hover:bg-transparent focus:bg-transparent text-left",
              sizeClasses[size],
              triggerClassName,
              className
            )}
            style={{ fontFamily: `var(--font-${fontFamily})` }}
          >
            <span className={cn("truncate", !selectedOption && "text-muted-foreground")}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15L7 10H17L12 15Z" fill="#1D1B20"/>
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className={cn(
            "w-[var(--radix-dropdown-menu-trigger-width)] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            contentClassName
          )}
          align="start"
          sideOffset={4}
        >
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              disabled={option.disabled}
              className={cn(
                "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                fontFamily === 'alata' && "font-alata",
                fontFamily === 'almarai' && "font-almarai"
              )}
              onClick={() => onValueChange?.(option.value)}
            >
              <span className="flex-1">{option.label}</span>
              {selectedOption?.value === option.value && (
                <Check className="ml-2 h-4 w-4" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

// Specialized dropdown components for common use cases
export function LocationDropdown({
  value,
  onValueChange,
  placeholder = "Select location",
  label,
  disabled = false,
  size = 'default',
  className,
  labelClassName,
}: Omit<LargaNowDropdownProps, 'options' | 'fontFamily'>) {
  const locationOptions: DropdownOption[] = [
    { value: 'surigao-city', label: 'Surigao City' },
    { value: 'dapa', label: 'Dapa, Surigao Del Norte' },
    { value: 'general-luna', label: 'General Luna' },
    { value: 'siargao', label: 'Siargao Island' },
    { value: 'cebu', label: 'Cebu City' },
    { value: 'manila', label: 'Manila' },
  ];

  return (
    <LargaNowDropdown
      options={locationOptions}
      value={value}
      onValueChange={onValueChange}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      size={size}
      fontFamily="almarai"
      className={className}
      labelClassName={labelClassName}
    />
  );
}

export function ShippingLineDropdown({
  value,
  onValueChange,
  placeholder = "Select shipping line",
  label,
  disabled = false,
  size = 'default',
  className,
  labelClassName,
}: Omit<LargaNowDropdownProps, 'options' | 'fontFamily'>) {
  const shippingOptions: DropdownOption[] = [
    { value: 'evaristo-son', label: 'EVARISTO & SON SHIPPING LINES CORPORATION' },
    { value: 'montenegro', label: 'MONTENEGRO SHIPPING LINES' },
    { value: '2go', label: '2GO TRAVEL' },
    { value: 'fastcat', label: 'FASTCAT' },
    { value: 'oceanjet', label: 'OCEANJET' },
  ];

  return (
    <LargaNowDropdown
      options={shippingOptions}
      value={value}
      onValueChange={onValueChange}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      size={size}
      fontFamily="almarai"
      className={className}
      labelClassName={labelClassName}
    />
  );
}

export function DateRangeDropdown({
  value,
  onValueChange,
  placeholder = "Select date range",
  label,
  disabled = false,
  size = 'default',
  className,
  labelClassName,
}: Omit<LargaNowDropdownProps, 'options' | 'fontFamily'>) {
  const dateOptions: DropdownOption[] = [
    { value: '09/08/25-09/18/25', label: '09/08/25 - 09/18/25' },
    { value: '09/15/25-09/25/25', label: '09/15/25 - 09/25/25' },
    { value: '09/22/25-10/02/25', label: '09/22/25 - 10/02/25' },
    { value: '10/01/25-10/11/25', label: '10/01/25 - 10/11/25' },
    { value: '10/08/25-10/18/25', label: '10/08/25 - 10/18/25' },
  ];

  return (
    <LargaNowDropdown
      options={dateOptions}
      value={value}
      onValueChange={onValueChange}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      size={size}
      fontFamily="almarai"
      className={className}
      labelClassName={labelClassName}
    />
  );
} 