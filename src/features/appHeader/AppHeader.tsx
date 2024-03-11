import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/app';
import { useAppTitle } from '@/hooks';
import { NavBar } from '@/ui';

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const title = useAppTitle();
  const favoriteSongsAmount = useAppSelector(
    (state) => state.favoriteSongs.length,
  );

  const handleNavigationBackClick = () => {
    navigate(-1);
  };

  return (
    <NavBar
      title={title}
      favoriteSongsAmount={favoriteSongsAmount}
      onNavigationBackClick={isHomePage ? undefined : handleNavigationBackClick}
    />
  );
};

export default AppHeader;
