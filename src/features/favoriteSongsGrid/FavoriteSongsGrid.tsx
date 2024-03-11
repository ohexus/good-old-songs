import { Stack } from '@mui/material';
import { useAppSelector } from '@/app';
import { FavoriteSongCard } from './components';

const FavoriteSongsGrid = () => {
  const songs = useAppSelector((state) => state.favoriteSongs);

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

export default FavoriteSongsGrid;
