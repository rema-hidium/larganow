import React from 'react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className={cn(
        "text-gray-700 hover:text-orange-500 font-medium font-alata transition-colors",
        className
      )}
    >
      {children}
    </a>
  );
} 