import { Box, Container } from '@mui/material';
import Router from '../router';

const App = () => (
  <Container maxWidth={false} disableGutters>
    <Box sx={{ bgcolor: '#fbfbfb', height: '100vh' }}>
      <Router />
    </Box>
  </Container>
);

export default App;
