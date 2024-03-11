import { useCallback, useState } from 'react';
import { Box, CircularProgress, Pagination, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app';
import { addSong, removeSong } from '@/features';
import { useGetSongsByArtistQuery } from '@/services/artistsApi';
import { SongCard } from '@/ui';

export interface SongsProps {
  artistId: string;
  totalAmount: number;
}

const songsPerPage = 5;

const Songs: React.FC<SongsProps> = ({ artistId, totalAmount }) => {
  const dispatch = useAppDispatch();
  const favoriteSongs = useAppSelector((state) => state.favoriteSongs);

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

  const handleAddSong = (id: string) => {
    dispatch(
      addSong({
        artistId,
        id,
      }),
    );
  };

  const handleRemoveSong = (id: string) => {
    dispatch(removeSong(id));
  };

  const checkIsFavorite = useCallback(
    (id: string) => {
      return favoriteSongs.findIndex((song) => song.id === id) !== -1;
    },
    [favoriteSongs],
  );

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
      />
    </Box>
  );
};

export default Songs;
