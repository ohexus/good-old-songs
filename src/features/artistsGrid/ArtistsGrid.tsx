import { CircularProgress, Grid } from '@mui/material';
import { useGetAllArtistsQuery } from '@/services/artistsApi';
import { ArtistCard } from '@/ui';

const ArtistsGrid = () => {
  const { data = [], error, isLoading } = useGetAllArtistsQuery();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  return (
    <Grid container spacing={2}>
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
  );
};

export default ArtistsGrid;
