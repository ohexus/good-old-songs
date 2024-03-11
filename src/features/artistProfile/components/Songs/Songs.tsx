import { useState } from 'react';
import { Box, CircularProgress, Pagination, Stack } from '@mui/material';
import { SongCard } from '@/ui';
import useFavoriteSongs from './useFavoriteSongs';
import useSongs from './useSongs';

export interface SongsProps {
  artistId: string;
  totalAmount: number;
}

const Songs: React.FC<SongsProps> = ({ artistId, totalAmount }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, totalPages } = useSongs(currentPage, artistId, totalAmount);
  const { checkIsFavorite, addFavoriteSong, removeFavoriteSong } = useFavoriteSongs();

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleAddSong = (id: string) => {
    addFavoriteSong(id, artistId);
  };

  const handleRemoveSong = (id: string) => {
    removeFavoriteSong(id);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%" pb={2}>
      <Box width="100%" mb={2}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Stack
            spacing={2}
            direction="column"
            alignContent="center"
            justifyContent="stretch"
            width="100%"
          >
            {data.map((song) => (
              <SongCard
                key={song.id}
                data={song}
                addCta={handleAddSong}
                removeCta={handleRemoveSong}
                defaultFavorite={checkIsFavorite(song.id)}
              />
            ))}
          </Stack>
        )}
      </Box>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
      />
    </Box>
  );
};

export default Songs;
