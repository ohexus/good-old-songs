import { useGetSongsByArtistQuery } from '@/services/artistsApi';

const songsPerPage = 5;

const useSongs = (
  currentPage: number,
  artistId: string,
  totalAmount: number,
) => {
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

  return {
    data,
    isLoading,
    totalPages,
  };
};

export default useSongs;
