import { AppHeader } from '@/features';

export interface RootLayoutProps {
  children?: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <div className="root">
    <AppHeader />
    {children}
  </div>
);

export default RootLayout;
