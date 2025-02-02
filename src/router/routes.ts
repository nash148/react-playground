import React from 'react';
import { RouteObject } from 'react-router';
import { ShadcnPage } from '@/pages/shadcn-page';
import { WorkflowPage } from '@/pages/workflow-page';
import { DashboardPage } from '@/pages/dashboard-page';
import { PrimeReactPage } from '@/pages/prime-react-page';

export const routes: RouteObject[] = [
  {
    path: '/dashboard',
    element: React.createElement(DashboardPage),
  },
  {
    path: '/reports/basic-shadcn',
    element: React.createElement(ShadcnPage),
  },
  {
    path: '/reports/prime-react',
    element: React.createElement(PrimeReactPage),
  },
  {
    path: '/reports',
    element: React.createElement(ShadcnPage),
  },
  {
    path: '/workflow',
    element: React.createElement(WorkflowPage),
  },
];
