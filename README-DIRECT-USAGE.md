
# Using Shared UI Components Directly

This guide explains how to use the built UI components directly in another application without publishing them as an npm package.

## Building the Library

1. Clone this repository
2. Install dependencies: `npm install`
3. Build the library: `npm run build:lib`

This will generate the following in the `dist` folder:
- ES modules in `dist/src/components/shared/`
- TypeScript type definitions in `dist/types/`
- CSS file at `dist/shared-ui.css`

## Using in Another Project

### Method 1: Direct File Reference (Local Development)

If both projects are on your local machine, you can reference the built files directly:

1. In your consuming project, create a path alias in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "shared-ui-components": ["../path-to-this-repo/dist/src/components/shared"]
    }
  }
}
```

2. Update your build tool (webpack, vite, etc.) to resolve this path alias

3. Import the CSS file in your main entry file (e.g., main.tsx):

```jsx
import '../path-to-this-repo/dist/shared-ui.css';
```

4. Import components in your project:

```jsx
import { Button, Card } from 'shared-ui-components';

function MyComponent() {
  return (
    <Card variant="bordered" padding="md">
      <Button variant="primary">Click Me</Button>
    </Card>
  );
}
```

### Method 2: Copy Build Output

1. Build the library: `npm run build:lib`
2. Copy the `dist` folder to your consuming project
3. In your consuming project, add a path alias in your build configuration that points to the copied dist folder
4. Import the CSS file in your main entry file

### Method 3: Local Package

1. Build the library: `npm run build:lib`
2. In your consuming project's package.json, add:

```json
{
  "dependencies": {
    "shared-ui-components": "file:../path-to-this-repo"
  }
}
```

3. Run `npm install` in your consuming project
4. Import the CSS in your entry file:

```jsx
import 'shared-ui-components/dist/shared-ui.css';
```

## Notes on Dependencies

The shared UI components have the following peer dependencies:
- React 18+
- React DOM 18+

Make sure your consuming project has these dependencies installed.

## Style Requirements

The components use Tailwind CSS. The library exports its own CSS file with the necessary Tailwind classes, but your consuming project should:

1. Have a compatible theme configuration (colors, spacing, etc.)
2. If you're using Tailwind in your consuming project as well, ensure that your configuration extends or is compatible with the shared UI components theme
