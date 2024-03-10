import { useState } from 'react';
import { Box, CircularProgress, Pagination, Stack } from '@mui/material';
import { useGetSongsByArtistQuery } from '@/services/artistsApi';
import { SongCard } from '@/ui';

export interface SongsProps {
  artistId: string;
  totalAmount: number;
}

const songsPerPage = 5;

const Songs: React.FC<SongsProps> = ({ artistId, totalAmount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalAmount / songsPerPage);
  const {
    data = [],
    error,
    isLoading,
  } = useGetSongsByArtistQuery({
    id: artistId,
    params: {
      page: currentPage,
      limit: songsPerPage,
    },
  });

  if (error) {
    throw error;
  }

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mb={2}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Stack
            spacing={2}
            direction="row"
            alignContent="center"
            justifyContent="center"
            width="100%"
          >
            {data.map((song) => (
              <SongCard key={song.id} data={song} />
            ))}
          </Stack>
        )}
      </Box>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </Box>
  );
};

export default Songs;
