
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info'] 
    },
    size: { 
      control: 'select', 
      options: ['sm', 'md', 'lg'] 
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Badge',
    size: 'md',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Badge',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Badge',
    size: 'md',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
    size: 'md',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
    size: 'md',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
    size: 'md',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
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
