
import React from 'react';
import { Heading, Text } from '@/components/shared/Typography';
import { Alert } from '@/components/shared/Alert';
import { Card, CardContent } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';

const Documentation = () => {
  return (
    <div className="space-y-12">
      <section>
        <Heading level={1} className="mb-2">Documentation</Heading>
        <Text variant="lead" className="mb-8">
          Learn how to use and customize our component library for your projects.
        </Text>
        
        <Alert 
          variant="info" 
          title="Getting Started"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        >
          This documentation will help you get started with our component library.
        </Alert>
      </section>

      <section id="installation">
        <Heading level={2} className="mb-4">Installation</Heading>
        <Text className="mb-4">
          You can install our component library using npm or yarn:
        </Text>
        
        <Card variant="bordered" className="mb-6">
          <CardContent className="p-4">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-3">
              <pre className="overflow-x-auto">
                <code>npm install shared-ui-components</code>
              </pre>
            </div>
          </CardContent>
        </Card>
        
        <Text className="mb-4">
          Then, you can import components as needed:
        </Text>
        
        <Card variant="bordered" className="mb-6">
          <CardContent className="p-4">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-3">
              <pre className="overflow-x-auto">
                <code>{`import { Button, Card, Input } from 'shared-ui-components';`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="usage">
        <Heading level={2} className="mb-4">Usage</Heading>
        <Text className="mb-4">
          Here's a basic example of how to use our components:
        </Text>
        
        <Card variant="bordered" className="mb-6">
          <CardContent className="p-4">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-3">
              <pre className="overflow-x-auto">
                <code>{`import React from 'react';
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from 'shared-ui-components';

const LoginForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input 
            placeholder="Email"
            leftElement={<EmailIcon />}
          />
          <Input 
            type="password"
            placeholder="Password"
            leftElement={<LockIcon />}
          />
          <Button>Sign In</Button>
        </div>
      </CardContent>
    </Card>
  );
};`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="customization">
        <Heading level={2} className="mb-4">Customization</Heading>
        <Text className="mb-4">
          All components accept custom props that allow you to override default styles. Here are common ways to customize components:
        </Text>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="h-full">
            <CardContent className="p-6">
              <Heading level={3} className="mb-2">Prop Customization</Heading>
              <Text variant="body" className="mb-4">
                Use component props to customize behavior and appearance.
              </Text>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-3">
                <pre className="overflow-x-auto text-sm">
                  <code>{`<Button 
  variant="outline"
  size="lg"
  className="rounded-full"
>
  Custom Button
</Button>`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent className="p-6">
              <Heading level={3} className="mb-2">Theme Customization</Heading>
              <Text variant="body" className="mb-4">
                Override theme variables to customize all instances of components.
              </Text>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-3">
                <pre className="overflow-x-auto text-sm">
                  <code>{`// theme.js
export const theme = {
  colors: {
    primary: '#0ea5e9',
    secondary: '#7e69ab',
    // ...
  },
  // ...
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="components-api">
        <Heading level={2} className="mb-4">Component API Reference</Heading>
        <Text className="mb-6">
          Detailed documentation for each component in the library.
        </Text>
        
        <div className="space-y-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Heading level={3} className="mb-0">Button</Heading>
                <Badge variant="primary">Core</Badge>
              </div>
              
              <Text variant="body" className="mb-4">
                Buttons are used to trigger actions or events.
              </Text>
              
              <Heading level={4} className="mb-2">Props</Heading>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Prop</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">variant</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">string</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">'primary'</td>
                      <td className="px-6 py-4 text-sm">Button style variant: 'primary', 'secondary', 'outline', 'ghost', 'link', 'destructive'</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">size</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">string</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">'md'</td>
                      <td className="px-6 py-4 text-sm">Button size: 'sm', 'md', 'lg'</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">isLoading</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">boolean</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">false</td>
                      <td className="px-6 py-4 text-sm">Shows a loading spinner and disables the button</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">leftIcon</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">ReactNode</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                      <td className="px-6 py-4 text-sm">Icon to display on the left side of the button</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">rightIcon</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">ReactNode</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                      <td className="px-6 py-4 text-sm">Icon to display on the right side of the button</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Heading level={3} className="mb-0">Input</Heading>
                <Badge variant="primary">Core</Badge>
              </div>
              
              <Text variant="body" className="mb-4">
                Inputs are used to collect user data.
              </Text>
              
              <Heading level={4} className="mb-2">Props</Heading>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Prop</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">leftElement</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">ReactNode</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                      <td className="px-6 py-4 text-sm">Element to display on the left side of the input</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">rightElement</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">ReactNode</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                      <td className="px-6 py-4 text-sm">Element to display on the right side of the input</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">error</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">string</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                      <td className="px-6 py-4 text-sm">Error message to display below the input</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">hint</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">string</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">-</td>
                      <td className="px-6 py-4 text-sm">Hint text to display below the input</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="support">
        <Heading level={2} className="mb-4">Support & Feedback</Heading>
        <Text className="mb-4">
          If you need help or have feedback about our component library, please reach out to us.
        </Text>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="h-full">
            <CardContent className="p-6">
              <Heading level={3} className="mb-2">GitHub Issues</Heading>
              <Text variant="body">
                Open an issue on our GitHub repository for bug reports or feature requests.
              </Text>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent className="p-6">
              <Heading level={3} className="mb-2">Community</Heading>
              <Text variant="body">
                Join our Discord community to chat with other developers and get help.
              </Text>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
