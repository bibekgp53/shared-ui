
import React from 'react';
import { Heading, Text } from '@/components/shared/Typography';
import { ComponentPreview } from '@/components/ComponentPreview';
import { Button } from '@/components/shared/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/shared/Card';
import { Input } from '@/components/shared/Input';
import { Badge } from '@/components/shared/Badge';
import { Alert } from '@/components/shared/Alert';

const Components = () => {
  return (
    <div className="space-y-12">
      <section>
        <Heading level={1} className="mb-2">Component Library</Heading>
        <Text variant="lead" className="mb-8">
          Browse our collection of UI components, designed for consistency, accessibility, and flexibility.
        </Text>
      </section>

      <section id="buttons">
        <Heading level={2} className="mb-6">Buttons</Heading>
        
        <ComponentPreview 
          title="Button Variants" 
          description="Different button styles for different contexts."
          code={`<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="link">Link</Button>\n<Button variant="destructive">Destructive</Button>`}
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </ComponentPreview>

        <ComponentPreview 
          title="Button Sizes" 
          description="Different button sizes for different contexts."
          code={`<Button size="sm">Small</Button>\n<Button size="md">Medium</Button>\n<Button size="lg">Large</Button>`}
        >
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </ComponentPreview>

        <ComponentPreview 
          title="Button States" 
          description="Buttons in different states."
          code={`<Button>Default</Button>\n<Button disabled>Disabled</Button>\n<Button isLoading>Loading</Button>`}
        >
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
        </ComponentPreview>
      </section>

      <section id="cards">
        <Heading level={2} className="mb-6">Cards</Heading>
        
        <ComponentPreview 
          title="Card Variants" 
          description="Different card styles for different contexts."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
              </CardHeader>
              <CardContent>
                <Text>This is a default card with simple styling.</Text>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>
            
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Bordered Card</CardTitle>
              </CardHeader>
              <CardContent>
                <Text>This card has a border to make it stand out.</Text>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>
            
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
              </CardHeader>
              <CardContent>
                <Text>This card has a shadow to give it elevation.</Text>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </ComponentPreview>
      </section>

      <section id="inputs">
        <Heading level={2} className="mb-6">Inputs</Heading>
        
        <ComponentPreview 
          title="Basic Inputs" 
          description="Input fields for collecting user data."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Input placeholder="Default input" />
            <Input placeholder="Disabled input" disabled />
            <Input placeholder="With error" error="This field is required" />
            <Input placeholder="With hint" hint="Enter your username" />
          </div>
        </ComponentPreview>

        <ComponentPreview 
          title="Input with Icons" 
          description="Input fields with leading and trailing icons."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Input 
              placeholder="Search..." 
              leftElement={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              } 
            />
            <Input 
              type="password"
              placeholder="Password" 
              rightElement={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              } 
            />
          </div>
        </ComponentPreview>
      </section>

      <section id="badges">
        <Heading level={2} className="mb-6">Badges</Heading>
        
        <ComponentPreview 
          title="Badge Variants" 
          description="Different badge styles for different contexts."
        >
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
        </ComponentPreview>

        <ComponentPreview 
          title="Badge Sizes" 
          description="Different badge sizes for different contexts."
        >
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </ComponentPreview>
      </section>

      <section id="alerts">
        <Heading level={2} className="mb-6">Alerts</Heading>
        
        <ComponentPreview 
          title="Alert Variants" 
          description="Different alert styles for different contexts."
        >
          <div className="grid grid-cols-1 gap-4 w-full">
            <Alert 
              variant="info" 
              title="Information"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              onClose={() => alert('Info alert closed')}
            >
              This is an informational alert to provide helpful context.
            </Alert>
            
            <Alert 
              variant="success" 
              title="Success"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              onClose={() => alert('Success alert closed')}
            >
              Your operation was completed successfully.
            </Alert>
            
            <Alert 
              variant="warning" 
              title="Warning"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              }
              onClose={() => alert('Warning alert closed')}
            >
              Please be careful with this action, it might have consequences.
            </Alert>
            
            <Alert 
              variant="danger" 
              title="Error"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              onClose={() => alert('Error alert closed')}
            >
              An error occurred while processing your request. Please try again.
            </Alert>
          </div>
        </ComponentPreview>
      </section>

      <section id="typography">
        <Heading level={2} className="mb-6">Typography</Heading>
        
        <ComponentPreview 
          title="Headings" 
          description="Different heading styles for different contexts."
        >
          <div className="grid grid-cols-1 gap-4 w-full">
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
            <Heading level={4}>Heading 4</Heading>
            <Heading level={5}>Heading 5</Heading>
            <Heading level={6}>Heading 6</Heading>
          </div>
        </ComponentPreview>

        <ComponentPreview 
          title="Text Variants" 
          description="Different text styles for different contexts."
        >
          <div className="grid grid-cols-1 gap-4 w-full">
            <Text variant="body">Body text is used for most content.</Text>
            <Text variant="lead">Lead text is slightly larger for introductions or key points.</Text>
            <Text variant="small">Small text is used for less important information.</Text>
            <Text variant="muted">Muted text is used for supplementary information.</Text>
          </div>
        </ComponentPreview>
      </section>
    </div>
  );
};

export default Components;
