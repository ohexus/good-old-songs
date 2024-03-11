import { Song } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FavoriteSongsState {
  favoriteSongs: Song[];
}

const initialState: FavoriteSongsState = {
  favoriteSongs: [],
};

const favoriteSongsSlice = createSlice({
  name: 'favoriteSongs',
  initialState,
  reducers: {
    addSong: (state, action: PayloadAction<Song>) => {
      state.favoriteSongs.push(action.payload);
    },
    removeSong: (state, action: PayloadAction<string>) => {
      const newFavoriteSongs = state.favoriteSongs.filter(
        (song) => song.id !== action.payload,
      );

      state.favoriteSongs = newFavoriteSongs;
    },
  },
});

export const { addSong, removeSong } = favoriteSongsSlice.actions;

export default favoriteSongsSlice;
