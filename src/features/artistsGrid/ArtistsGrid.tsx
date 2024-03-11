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
    <Grid container spacing={4}>
      {data.map((artist) => (
        <Grid item key={artist.id} xs={3}>
          <ArtistCard data={artist} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ArtistsGrid;
