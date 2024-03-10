import { ArtistProfile } from '@/features';
import { useParams } from 'react-router-dom';

const Artist = () => {
  const { artistId } = useParams();

  if (!artistId) {
    throw new Error('No artist ID specified');
  }

  return <ArtistProfile id={artistId} />;
};

export default Artist;
