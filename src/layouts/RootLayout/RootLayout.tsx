import { NavBar } from '@/ui';

export interface RootLayoutProps {
  children?: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <div className="root">
    <NavBar title='TODO: Dynamic Title' />
    {children}
  </div>
);

export default RootLayout;
