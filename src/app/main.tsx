import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from '@/app/provider';
import { Router } from '@/app/router';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Router />
    </Provider>
  </StrictMode>,
);
