import { AppTitles, FavoriteSongsGrid } from '@/features';
import { useAppTitle } from '@/hooks';
import { PageLayout } from '@/layouts';

const Favorite = () => {
  useAppTitle(AppTitles.FAVORITE_PAGE);

  return (
    <PageLayout>
      <FavoriteSongsGrid />
    </PageLayout>
  );
};

export default Favorite;
