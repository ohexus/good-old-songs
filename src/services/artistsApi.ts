import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Artist } from '../types';

const artistsApi = createApi({
  reducerPath: 'artistsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://640799f62f01352a8a7faa72.mockapi.io/api/',
  }),
  endpoints: (builder) => ({
    getAllArtists: builder.query<Artist[], void>({
      query: () => 'artists',
    }),
  }),
});

export const {
  useGetAllArtistsQuery,
} = artistsApi;

export default artistsApi;
