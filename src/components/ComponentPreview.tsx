
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './shared/Card';

interface ComponentPreviewProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  title,
  description,
  children,
  code,
}) => {
  const [showCode, setShowCode] = React.useState(false);

  return (
    <Card variant="bordered" className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          {code && (
            <button
              onClick={() => setShowCode(!showCode)}
              className="text-sm text-brand-600 hover:text-brand-700"
            >
              {showCode ? 'Hide Code' : 'View Code'}
            </button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 mb-4">{children}</div>
        {showCode && code && (
          <div className="mt-4 p-4 bg-gray-900 text-white rounded-md overflow-x-auto">
            <pre className="text-sm">{code}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
