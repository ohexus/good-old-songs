import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/app';
import {
  addFavoriteSong as addFavoriteSongAction,
  removeFavoriteSong as removeFavoriteSongAction,
} from '@/features';

const useFavoriteSongs = () => {
  const dispatch = useAppDispatch();
  const favoriteSongs = useAppSelector((state) => state.favoriteSongs);

  const checkIsFavorite = useCallback(
    (id: string) => {
      return favoriteSongs.findIndex((song) => song.id === id) !== -1;
    },
    [favoriteSongs],
  );

  const addFavoriteSong = (id: string, artistId: string) => {
    dispatch(
      addFavoriteSongAction({
        artistId,
        id,
      }),
    );
  };

  const removeFavoriteSong = (id: string) => {
    dispatch(removeFavoriteSongAction(id));
  };

  return {
    data: favoriteSongs,
    checkIsFavorite,
    addFavoriteSong,
    removeFavoriteSong,
  };
};

export default useFavoriteSongs;
