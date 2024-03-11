import { Avatar, Box, CircularProgress, Typography } from '@mui/material';
import { useAppTitle } from '@/hooks';
import { useGetArtistByIdQuery } from '@/services/artistsApi';
import { Songs } from './components';

export interface ArtistProfileProps {
  id: string;
}

const ArtistProfile: React.FC<ArtistProfileProps> = ({ id }) => {
  const { data, error, isLoading } = useGetArtistByIdQuery(id);

  useAppTitle(data?.name);

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
    <>
      <Box display="flex" alignItems="center" gap={4} pt={4} mb={4}>
        <Avatar
          src={data.avatar}
          alt={data.name}
          sx={{ width: 144, height: 144 }}
        />
        <Typography variant="h2" component="h1">
          {data.name}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          Songs
        </Typography>
        <Songs artistId={id} totalAmount={data.songsCount} />
      </Box>
    </>
  );
};

export default ArtistProfile;
