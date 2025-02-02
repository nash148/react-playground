'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CollapsibleCardProps {
  title: string;
  statements: string[];
}

export function CollapsibleCard({ title, statements }: CollapsibleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="w-full max-w-full mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls={`content-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
          <span className="sr-only">{isExpanded ? 'Collapse' : 'Expand'}</span>
        </Button>
      </CardHeader>
      <CardContent className="px-4 sm:px-6 flex justify-start">
        <div
          id={`content-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-[1000px]' : 'max-h-0'
          }`}
        >
          <ul className="list-disc pl-5 space-y-2 max-w-4xl mx-auto">
            {statements.map((statement, index) => (
              <li key={index} className="text-base">
                {statement}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
