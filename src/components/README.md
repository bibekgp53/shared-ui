
# Shared UI Components

A beautiful, customizable, and accessible component library for React applications.

## Installation

```bash
npm install shared-ui-components
```

## Usage

```jsx
import { Button, Card, Alert } from 'shared-ui-components';

function MyComponent() {
  return (
    <div>
      <Card variant="elevated" padding="lg">
        <h1>Hello World</h1>
        <p>This is a card from shared-ui-components</p>
        <Button variant="primary" size="md">Click Me</Button>
      </Card>
      
      <Alert variant="info" title="Information">
        This is an informational alert
      </Alert>
    </div>
  );
}
```

## Available Components

- Button
- Card
- Input
- Badge
- Alert
- Typography (Heading, Text)
- ThemeToggle

Each component is customizable with props. Refer to the component's TypeScript definitions for all available props.

## Requirements

- React 19.1.0 or higher
- React DOM 19.1.0 or higher

## Theme Customization

This library uses Tailwind CSS for styling. You can customize the theme by extending your tailwind.config.js.

## License

MIT
