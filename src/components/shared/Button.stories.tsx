
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['primary', 'secondary', 'outline', 'ghost', 'link', 'destructive'] 
    },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg'] 
    },
    isLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
    size: 'md',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Button Link',
    size: 'md',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
    size: 'md',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    children: 'Loading',
    isLoading: true,
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled',
    disabled: true,
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    children: 'Small',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    children: 'Medium',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    children: 'Large',
    size: 'lg',
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: 'primary',
    children: 'With Icon',
    leftIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'primary',
    children: 'With Icon',
    rightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5l7 7-7 7"></path>
      </svg>
    ),
  },
};
