import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from '@/app/provider';
import { Router } from '@/app/router';
import './index.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Router />
    </Provider>
  </StrictMode>,
);
