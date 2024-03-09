import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import RoutePaths from '@/router/RoutePaths'; // Direct import to avoid possible circular dependency

export interface NavBarProps {
  title: string;
}

const navItems = [
  {
    path: RoutePaths.HOME,
    name: 'HOME',
  },
  {
    path: RoutePaths.ARTIST,
    name: 'ARTIST',
  },
  {
    path: RoutePaths.FAVORITE,
    name: 'FAVORITE',
  },
];

const NavBar: React.FC<NavBarProps> = ({ title }) => (
  <Box sx={{ display: 'flex' }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Box>
          {navItems.map(({ path, name }) => (
            <Button
              key={path}
              component={RouterLink}
              sx={{ color: '#fff' }}
              to={path}
            >
              {name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
