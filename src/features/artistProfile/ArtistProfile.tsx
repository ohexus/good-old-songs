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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        mb={4}
      >
        <Avatar
          src={data.avatar}
          alt={data.name}
          sx={{ width: 240, height: 240 }}
          variant="rounded"
        />
        <Typography variant="h3" component="h1">
          {data.name}
        </Typography>
      </Box>
      <Songs artistId={id} totalAmount={data.songsCount} />
    </>
  );
};

export default ArtistProfile;
