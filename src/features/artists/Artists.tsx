import { CircularProgress, Grid } from '@mui/material';
import { useGetAllArtistsQuery } from '../../services/artistsApi';
import { ArtistCard } from './components';

const Artists = () => {
  const { data = [], error, isLoading } = useGetAllArtistsQuery();

  if (error) {
    throw error;
  }

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : data ? (
        <Grid container spacing={2} padding={4}>
          {data.map(({ avatar, id, name, songsCount }) => (
            <Grid item key={id}>
              <ArtistCard
                avatar={avatar}
                id={id}
                name={name}
                songsCount={songsCount}
              />
            </Grid>
          ))}
        </Grid>
      ) : null}
    </div>
  );
};

export default Artists;
