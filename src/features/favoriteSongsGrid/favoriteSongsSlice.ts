import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FavoriteSongRecord {
  artistId: string;
  id: string;
}

const favoriteSongsSlice = createSlice({
  name: 'favoriteSongs',
  initialState: [] as FavoriteSongRecord[],
  reducers: {
    addSong: (state, action: PayloadAction<FavoriteSongRecord>) => {
      state.push(action.payload);
    },
    removeSong: (state, action: PayloadAction<string>) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addSong, removeSong } = favoriteSongsSlice.actions;

export default favoriteSongsSlice;
