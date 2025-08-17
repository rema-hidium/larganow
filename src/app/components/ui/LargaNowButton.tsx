import React from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from '@/lib/utils';

type LargaNowVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'warning' | 'link';

interface LargaNowButtonProps extends Omit<ButtonProps, 'fontFamily' | 'variant'> {
  fontFamily?: 'alata' | 'almarai' | 'default';
  variant?: LargaNowVariant;
}

export function LargaNowButton({ 
  children, 
  fontFamily = 'almarai', 
  variant = 'primary',
  className,
  ...props 
}: LargaNowButtonProps) {
  // Map our custom variants to shadcn variants
  const variantMap: Record<LargaNowVariant, ButtonProps['variant']> = {
    primary: 'default',
    secondary: 'secondary',
    outline: 'outline',
    ghost: 'ghost',
    destructive: 'destructive',
    success: 'success',
    warning: 'warning',
    link: 'link'
  };

  return (
    <Button
      variant={variantMap[variant]}
      fontFamily={fontFamily}
      className={cn(className)}
      {...props}
    >
      {children}
    </Button>
  );
} 