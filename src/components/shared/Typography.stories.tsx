
import type { Meta, StoryObj } from '@storybook/react';
import { Heading, Text } from './Typography';

const meta = {
  title: 'UI/Typography',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export default meta;

type HeadingStory = StoryObj<typeof Heading>;
type TextStory = StoryObj<typeof Text>;

export const Headings: HeadingStory = {
  render: () => (
    <div className="space-y-4 w-96">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </div>
  ),
};

export const CustomHeadingSizes: HeadingStory = {
  render: () => (
    <div className="space-y-4 w-96">
      <Heading level={2} size="4xl">Heading with 4xl size</Heading>
      <Heading level={2} size="3xl">Heading with 3xl size</Heading>
      <Heading level={2} size="2xl">Heading with 2xl size</Heading>
      <Heading level={2} size="xl">Heading with xl size</Heading>
      <Heading level={2} size="lg">Heading with lg size</Heading>
      <Heading level={2} size="md">Heading with md size</Heading>
      <Heading level={2} size="sm">Heading with sm size</Heading>
      <Heading level={2} size="xs">Heading with xs size</Heading>
    </div>
  ),
};

export const HeadingVariations: HeadingStory = {
  render: () => (
    <div className="space-y-4 w-96">
      <Heading level={2} className="text-blue-600">Colored Heading</Heading>
      <Heading level={2} className="italic">Italic Heading</Heading>
      <Heading level={2} className="underline">Underlined Heading</Heading>
      <Heading level={2} className="font-normal">Normal Weight Heading</Heading>
      <Heading level={2} className="font-light">Light Weight Heading</Heading>
    </div>
  ),
};

export const TextVariants: TextStory = {
  render: () => (
    <div className="space-y-4 w-96">
      <Text variant="body">Body text - The quick brown fox jumps over the lazy dog.</Text>
      <Text variant="lead">Lead text - The quick brown fox jumps over the lazy dog.</Text>
      <Text variant="small">Small text - The quick brown fox jumps over the lazy dog.</Text>
      <Text variant="muted">Muted text - The quick brown fox jumps over the lazy dog.</Text>
    </div>
  ),
};

export const TextVariations: TextStory = {
  render: () => (
    <div className="space-y-4 w-96">
      <Text variant="body" className="font-bold">Bold text</Text>
      <Text variant="body" className="italic">Italic text</Text>
      <Text variant="body" className="underline">Underlined text</Text>
      <Text variant="body" className="text-blue-600">Colored text</Text>
      <Text variant="body" as="span" className="block">Text as span element</Text>
    </div>
  ),
};
