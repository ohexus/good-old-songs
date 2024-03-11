import { AppTitles, ArtistsGrid } from '@/features';
import { useAppTitle } from '@/hooks';
import { PageLayout } from '@/layouts';

const Home = () => {
  useAppTitle(AppTitles.HOME_PAGE);

  return (
    <PageLayout>
      <ArtistsGrid />
    </PageLayout>
  );
};

export default Home;
