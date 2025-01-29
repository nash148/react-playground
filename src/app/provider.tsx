import { ThemeProvider } from '@/app/providers/theme-provider';

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
    <ThemeProvider>
      {/* <SidebarProvider defaultOpen={defaultOpen}>{children}</SidebarProvider> */}
      {children}
    </ThemeProvider>
  );
}
