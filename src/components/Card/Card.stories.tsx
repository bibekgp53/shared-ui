
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { 
      control: 'select', 
      options: ['default', 'bordered', 'elevated'] 
    },
    padding: { 
      control: 'select', 
      options: ['none', 'sm', 'md', 'lg'] 
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    children: 'Basic Card Content',
    className: 'w-96',
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    padding: 'md',
    children: 'Bordered Card Content',
    className: 'w-96',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    padding: 'md',
    children: 'Elevated Card Content',
    className: 'w-96',
  },
};

export const WithComponents: Story = {
  args: {
    variant: 'bordered',
    padding: 'md',
    className: 'w-96',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card. You can put any components or text here.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary" size="sm">Action</Button>
        <Button variant="outline" size="sm" className="ml-2">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};

export const NoPadding: Story = {
  args: {
    variant: 'default',
    padding: 'none',
    className: 'w-96',
    children: 'Card with no padding',
  },
};
