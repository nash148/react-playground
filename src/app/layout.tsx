import { useCookies } from 'react-cookie';
import { Outlet } from 'react-router';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { AppHeader } from '@/components/app-header';

export function AppLayout() {
  const [sidebarState] = useCookies(['sidebar:state']);

  let defaultOpen = true;

  // if (sidebarState['sidebar:state']) {
  //   defaultOpen = Boolean(sidebarState['sidebar:state']);
  // }

  return (
    <SidebarProvider defaultOpen={sidebarState['sidebar:state']}>
      <AppSidebar>
        <AppHeader />
        <div className="p-4 content h-full w-full">
          <Outlet />
        </div>
      </AppSidebar>
    </SidebarProvider>
  );
}
