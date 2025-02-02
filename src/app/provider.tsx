import { ThemeProvider } from '@/app/providers/theme-provider';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

type ProviderProps = {
  children: React.ReactNode;
};

export function Provider({ children }: ProviderProps) {
  // const [sidebarState] = useCookies(['sidebar:state']);

  // let defaultOpen = true;

  // if (sidebarState['sidebar:state']) {
  //   defaultOpen = Boolean(sidebarState['sidebar:state']);
  // }

  return (
    <PrimeReactProvider>
      <ThemeProvider>
        {/* <SidebarProvider defaultOpen={defaultOpen}>{children}</SidebarProvider> */}
        {children}
      </ThemeProvider>
    </PrimeReactProvider>
  );
}
