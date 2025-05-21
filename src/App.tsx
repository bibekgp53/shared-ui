
import React from 'react';
import { Button, Card, Alert, Badge, Input, Text, Heading, ThemeToggle } from './components/shared';

const App = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Heading level={1}>Shared UI Components Library</Heading>
          <ThemeToggle />
        </div>
        
        <Card className="mb-8">
          <Alert 
            title="Component Library" 
            variant="info"
          >
            This is our shared component library showcase. Use Storybook for full documentation.
          </Alert>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <Heading level={2} className="mb-4">Buttons</Heading>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="primary" isLoading>Loading</Button>
            </div>
          </Card>

          <Card>
            <Heading level={2} className="mb-4">Badges</Heading>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </Card>
        </div>

        <Card className="mb-8">
          <Heading level={2} className="mb-4">Typography</Heading>
          <div className="space-y-4">
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
            <Heading level={4}>Heading 4</Heading>
            <Heading level={5}>Heading 5</Heading>
            <Heading level={6}>Heading 6</Heading>
            <Text variant="body">Body Text</Text>
            <Text variant="lead">Lead Text</Text>
            <Text variant="small">Small Text</Text>
            <Text variant="muted">Muted Text</Text>
          </div>
        </Card>

        <Card>
          <Heading level={2} className="mb-4">Input</Heading>
          <div className="space-y-4">
            <Input placeholder="Default input" />
            <Input placeholder="With hint text" hint="Enter your username or email" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default App;
