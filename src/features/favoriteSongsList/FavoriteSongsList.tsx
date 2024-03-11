import { Stack } from '@mui/material';
import { useFavoriteSongs } from '@/hooks';
import { FavoriteSongCard } from './components';

const FavoriteSongsList = () => {
  const { data: songs } = useFavoriteSongs();

  return (
    <Stack
      spacing={2}
      direction="column"
      alignContent="center"
      justifyContent="stretch"
      width="100%"
    >
      {songs.map(({ artistId, id }) => (
        <FavoriteSongCard key={id} artistId={artistId} id={id} />
      ))}
    </Stack>
  );
};

export default FavoriteSongsList;
