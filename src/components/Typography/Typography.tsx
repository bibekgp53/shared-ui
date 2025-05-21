
import React from 'react';
import { cn } from '@/lib/utils';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'body' | 'lead' | 'small' | 'muted';
  as?: 'p' | 'div' | 'span';
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = 'body', as: Component = 'p', ...props }, ref) => {
    const variantStyles = {
      body: 'text-base',
      lead: 'text-lg text-gray-700 dark:text-gray-300',
      small: 'text-sm',
      muted: 'text-sm text-gray-500 dark:text-gray-400',
    };

    return (
      <Component
        ref={ref}
        className={cn(variantStyles[variant], className)}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, as, size, ...props }, ref) => {
    const Tag = as || (`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');

    const sizeStyles = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    };

    const defaultSizes = {
      1: '3xl',
      2: '2xl',
      3: 'xl',
      4: 'lg',
      5: 'md',
      6: 'sm',
    };

    const selectedSize = size || defaultSizes[level];
    
    return (
      <Tag
        ref={ref}
        className={cn(
          'font-bold tracking-tight',
          sizeStyles[selectedSize as keyof typeof sizeStyles],
          className
        )}
        {...props}
      />
    );
  }
);

Heading.displayName = 'Heading';
