import React from 'react';
import { RouteObject } from 'react-router';
import { ReportPage } from '@/pages/report-page';
import { WorkflowPage } from '@/pages/workflow-page';
import { DashboardPage } from '@/pages/dashboard-page';

export const routes: RouteObject[] = [
  {
    path: '/dashboard',
    element: React.createElement(DashboardPage),
  },
  {
    path: '/reports/basic-shadcn',
    element: React.createElement(ReportPage),
  },
  {
    path: '/reports',
    element: React.createElement(ReportPage),
  },
  {
    path: '/workflow',
    element: React.createElement(WorkflowPage),
  },
];
