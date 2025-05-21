
import React, { useState } from 'react';
import { Button, Card, CardHeader, CardTitle, CardContent, CardFooter, Alert, Badge, Input, Text, Heading, ThemeToggle } from './components';
import { CheckIcon, InfoIcon, AlertTriangleIcon, XCircleIcon } from 'lucide-react';

const App = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Heading level={1} className="text-brand-700 dark:text-brand-300">Shared UI Components</Heading>
          <ThemeToggle />
        </div>
        
        {isAlertVisible && (
          <Card className="mb-8" variant="elevated">
            <Alert 
              title="Component Library" 
              variant="info"
              icon={<InfoIcon className="h-5 w-5" />}
              onClose={() => setIsAlertVisible(false)}
            >
              This is our enhanced component library showcase with improved UI styling. Use Storybook for full documentation.
            </Alert>
          </Card>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
                <Button variant="primary" isLoading>Loading</Button>
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="info">Info</Badge>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8" variant="elevated">
          <CardHeader>
            <CardTitle>Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert 
              variant="info" 
              title="Information"
              icon={<InfoIcon className="h-5 w-5" />}
            >
              This is an informational message for the user.
            </Alert>
            <Alert 
              variant="success" 
              title="Success"
              icon={<CheckIcon className="h-5 w-5" />}
            >
              Your changes have been saved successfully.
            </Alert>
            <Alert 
              variant="warning" 
              title="Warning"
              icon={<AlertTriangleIcon className="h-5 w-5" />}
            >
              Please review your information before submitting.
            </Alert>
            <Alert 
              variant="danger" 
              title="Error"
              icon={<XCircleIcon className="h-5 w-5" />}
            >
              An error occurred while processing your request.
            </Alert>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Typography</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Heading level={1}>Heading 1</Heading>
              <Heading level={2}>Heading 2</Heading>
              <Heading level={3}>Heading 3</Heading>
              <Heading level={4}>Heading 4</Heading>
              <Heading level={5}>Heading 5</Heading>
              <Heading level={6}>Heading 6</Heading>
              <div className="space-y-2">
                <Text variant="body">Body Text - Regular paragraph text for general content.</Text>
                <Text variant="lead">Lead Text - Slightly larger text for introductions or highlighted content.</Text>
                <Text variant="small">Small Text - Smaller text for less important information.</Text>
                <Text variant="muted">Muted Text - De-emphasized text for secondary information.</Text>
              </div>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Inputs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Default input" />
              <Input 
                placeholder="With hint text" 
                hint="Enter your username or email" 
              />
              <Input 
                placeholder="With error" 
                error="This field is required" 
              />
              <Input 
                placeholder="With left icon" 
                leftElement={<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>}
              />
              <Input 
                placeholder="With right icon" 
                type="password"
                rightElement={<svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>}
              />
            </CardContent>
          </Card>
        </div>

        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Cards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Card variant="default" className="h-40 flex items-center justify-center">
                <Text>Default Card</Text>
              </Card>
              <Card variant="bordered" className="h-40 flex items-center justify-center">
                <Text>Bordered Card</Text>
              </Card>
              <Card variant="elevated" className="h-40 flex items-center justify-center">
                <Text>Elevated Card</Text>
              </Card>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">Cancel</Button>
            <Button variant="primary" size="sm" className="ml-2">Save Changes</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default App;
