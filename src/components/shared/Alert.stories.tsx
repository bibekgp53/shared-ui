
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['info', 'success', 'warning', 'danger'] 
    },
    title: { control: 'text' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational alert message.',
    className: 'w-96',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your action was completed successfully.',
    className: 'w-96',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Be careful with this action.',
    className: 'w-96',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    title: 'Error',
    children: 'There was a problem with your request.',
    className: 'w-96',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'info',
    title: 'With Icon',
    children: 'This alert has a custom icon.',
    className: 'w-96',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'warning',
    title: 'Dismissible',
    children: 'Click the X button to dismiss this alert.',
    className: 'w-96',
    onClose: () => console.log('Alert closed'),
  },
};
