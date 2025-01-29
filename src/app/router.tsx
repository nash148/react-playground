import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import { routes } from '@/router/routes';
import { AppLayout } from './layout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      ...routes,
      {
        path: '/',
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: '*',
        element: <h1>404</h1>,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
