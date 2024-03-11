import { Box, CircularProgress } from '@mui/material';
import { useAppDispatch } from '@/app';
import { addSong, removeSong } from '@/features';
import { useGetSongByIdQuery } from '@/services/artistsApi';
import { SongCard } from '@/ui';

export interface FavoriteSongCardProps {
  artistId: string;
  id: string;
}

const FavoriteSongCard: React.FC<FavoriteSongCardProps> = ({ artistId, id }) => {
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetSongByIdQuery({
    artistId,
    id,
  });

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

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

  return (
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <SongCard
          data={data}
          addCta={handleAddSong}
          removeCta={handleRemoveSong}
          defaultFavorite
        />
      )}
    </Box>
  );
};

export default FavoriteSongCard;
