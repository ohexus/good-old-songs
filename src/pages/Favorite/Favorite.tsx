import { AppTitles, FavoriteSongsList } from '@/features';
import { useAppTitle } from '@/hooks';
import { PageLayout } from '@/layouts';

const Favorite = () => {
  useAppTitle(AppTitles.FAVORITE_PAGE);

  return (
    <PageLayout>
      <FavoriteSongsList />
    </PageLayout>
  );
};

export default Favorite;
