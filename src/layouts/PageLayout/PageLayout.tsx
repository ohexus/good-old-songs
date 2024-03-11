import { Box, Container } from '@mui/material';

export interface PageLayoutProps {
  children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <Container>
    <Box height="100%" pt={4}>
      {children}
    </Box>
  </Container>
);

export default PageLayout;
