import { CircularProgress, Container, Grid } from '@mui/material';
import { useGetAllArtistsQuery } from '@/services/artistsApi';
import { ArtistCard } from '@/ui';

const ArtistsGrid = () => {
  const { data = [], error, isLoading } = useGetAllArtistsQuery();

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  return (
    <Container
      sx={{
        height: '100%',
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2} py={4}>
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
      )}
    </Container>
  );
};

export default ArtistsGrid;
