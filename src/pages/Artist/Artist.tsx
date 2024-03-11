import { useParams } from 'react-router-dom';
import { ArtistProfile } from '@/features';
import { PageLayout } from '@/layouts';

const Artist = () => {
  const { artistId } = useParams();

  if (!artistId) {
    throw new Error('No artist ID specified');
  }

  return (
    <PageLayout>
      <ArtistProfile id={artistId} />
    </PageLayout>
  );
};

export default Artist;
