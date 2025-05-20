
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/shared/Button';
import { Heading, Text } from '@/components/shared/Typography';
import { Card, CardContent } from '@/components/shared/Card';

const Home = () => {
  return (
    <div className="space-y-16">
      <section className="text-center py-12 md:py-24 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <Heading level={1} size="4xl" className="mb-6 bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
            Shared UI Component Library
          </Heading>
          <Text variant="lead" className="mb-8 max-w-3xl mx-auto">
            A beautiful, customizable, and accessible component library for React applications.
            Build consistent UIs faster and with confidence.
          </Text>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/components">
              <Button size="lg">
                Explore Components
              </Button>
            </Link>
            <Link to="/documentation">
              <Button variant="outline" size="lg">
                Read Documentation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card variant="elevated" className="md:transform md:hover:-translate-y-2 transition-transform duration-300">
          <CardContent padding="lg">
            <div className="h-12 w-12 bg-brand-100 dark:bg-brand-900 rounded-lg flex items-center justify-center text-brand-600 dark:text-brand-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <Heading level={3} className="mb-2">Fast & Lightweight</Heading>
            <Text variant="body">
              Built with performance in mind. Our components are optimized for speed and have minimal bundle size impact.
            </Text>
          </CardContent>
        </Card>

        <Card variant="elevated" className="md:transform md:hover:-translate-y-2 transition-transform duration-300">
          <CardContent padding="lg">
            <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <Heading level={3} className="mb-2">Customizable</Heading>
            <Text variant="body">
              Each component accepts custom styling and props, making it easy to adapt to your design system and brand.
            </Text>
          </CardContent>
        </Card>

        <Card variant="elevated" className="md:transform md:hover:-translate-y-2 transition-transform duration-300">
          <CardContent padding="lg">
            <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <Heading level={3} className="mb-2">Accessible</Heading>
            <Text variant="body">
              Built with accessibility in mind from the start. All components follow WAI-ARIA guidelines and best practices.
            </Text>
          </CardContent>
        </Card>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-lg p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <Heading level={2} className="mb-6">Ready to Use in Production</Heading>
          <Text variant="body" className="mb-8">
            Start building your next project with our component library. It's easy to integrate and will save you hours of development time.
          </Text>
          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6">
            <pre className="overflow-x-auto text-sm text-left">
              <code>npm install shared-ui-components</code>
            </pre>
          </div>
          <Button size="lg">Get Started</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
