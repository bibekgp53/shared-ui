
import React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  error?: string;
  hint?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    leftElement, 
    rightElement, 
    error, 
    hint,
    ...props 
  }, ref) => {
    return (
      <div className="w-full">
        <div className="relative">
          {leftElement && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
              {leftElement}
            </div>
          )}
          <input
            type={type}
            className={cn(
              'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm transition-colors',
              'border-gray-300 dark:border-gray-600',
              'input-focus-ring focus-visible:ring-brand-500',
              'placeholder:text-gray-500 dark:placeholder:text-gray-400',
              leftElement ? 'pl-10' : '',
              rightElement ? 'pr-10' : '',
              error ? 'border-red-500 focus-visible:ring-red-500' : 'hover:border-gray-400 dark:hover:border-gray-500',
              className
            )}
            ref={ref}
            {...props}
          />
          {rightElement && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {rightElement}
            </div>
          )}
        </div>
        {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
        {hint && !error && <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
