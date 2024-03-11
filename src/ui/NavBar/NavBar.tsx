import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  NavigateBefore as NavigateBeforeIcon,
} from '@mui/icons-material';
import RoutePaths from '@/router/RoutePaths'; // Direct import to avoid possible circular dependency

export interface NavBarProps {
  title: string;
  favoriteSongsAmount: number;
  onNavigationBackClick?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  title,
  favoriteSongsAmount,
  onNavigationBackClick,
}) => (
  <Box display="flex">
    <AppBar position="static">
      <Toolbar>
        <IconButton
          onClick={onNavigationBackClick}
          sx={{
            marginRight: 2,
            visibility: !onNavigationBackClick ? 'hidden' : 'visible',
          }}
          size="large"
          edge="start"
          color="inherit"
        >
          <NavigateBeforeIcon />
        </IconButton>
        <Typography variant="h5" component="h1" flexGrow={1}>
          {title}
        </Typography>
        <IconButton
          component={RouterLink}
          to={RoutePaths.FAVORITE}
          size="large"
          edge="end"
          color="inherit"
        >
          <Badge badgeContent={favoriteSongsAmount} showZero color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
