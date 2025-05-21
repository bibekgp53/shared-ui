
// Import the Tailwind CSS
import './styles.css';

// Export components
export * from './Alert';
export * from './Badge';
export * from './Button';
export * from './Card';
export * from './Input';
export * from './ThemeToggle';
export * from './Typography';

// Re-export necessary utilities that components depend on
export { cn } from '../lib/utils';
