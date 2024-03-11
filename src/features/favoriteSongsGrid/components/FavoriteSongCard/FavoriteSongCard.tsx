import { Box, CircularProgress } from '@mui/material';
import { useFavoriteSongs } from '@/hooks';
import { useGetSongByIdQuery } from '@/services/artistsApi';
import { SongCard } from '@/ui';

export interface FavoriteSongCardProps {
  artistId: string;
  id: string;
}

const FavoriteSongCard: React.FC<FavoriteSongCardProps> = ({ artistId, id }) => {
  const { data, error, isLoading } = useGetSongByIdQuery({
    artistId,
    id,
  });

  const { addFavoriteSong, removeFavoriteSong } = useFavoriteSongs();

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  const handleAddSong = (id: string) => {
    addFavoriteSong(id, artistId);
  };

  const handleRemoveSong = (id: string) => {
    removeFavoriteSong(id);
  };

  return (
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <SongCard data={data} addCta={handleAddSong} removeCta={handleRemoveSong} defaultFavorite />
      )}
    </Box>
  );
};

export default FavoriteSongCard;
