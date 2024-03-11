import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AppHeaderState {
  title: string;
}

const initialState: AppHeaderState = {
  title: '',
};

const appHeaderSlice = createSlice({
  name: 'appHeader',
  initialState: initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = appHeaderSlice.actions;

export default appHeaderSlice;
