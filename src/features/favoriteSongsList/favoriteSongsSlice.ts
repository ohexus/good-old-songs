import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FavoriteSongRecord {
  artistId: string;
  id: string;
}

const favoriteSongsSlice = createSlice({
  name: 'favoriteSongs',
  initialState: [] as FavoriteSongRecord[],
  reducers: {
    addFavoriteSong: (state, action: PayloadAction<FavoriteSongRecord>) => {
      state.push(action.payload);
    },
    removeFavoriteSong: (state, action: PayloadAction<string>) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addFavoriteSong, removeFavoriteSong } = favoriteSongsSlice.actions;

export default favoriteSongsSlice;
