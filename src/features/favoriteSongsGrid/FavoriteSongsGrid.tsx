import { Grid } from '@mui/material';
import { useAppSelector } from '@/app';
import { FavoriteSongCard } from './components';

const FavoriteSongsGrid = () => {
  const songs = useAppSelector((state) => state.favoriteSongs);

  return (
    <Grid container spacing={2}>
      {songs.map(({ artistId, id }) => (
        <Grid item xs={2} key={id}>
          <FavoriteSongCard artistId={artistId} id={id} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FavoriteSongsGrid;
