import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { appHeaderSlice, favoriteSongsSlice } from '@/features';
import artistsApi from '@/services/artistsApi';

const store = configureStore({
  reducer: {
    appHeader: appHeaderSlice.reducer,
    favoriteSongs: favoriteSongsSlice.reducer,
    [artistsApi.reducerPath]: artistsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artistsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
