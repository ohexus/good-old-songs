import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Artist, Song } from '@/types';

const artistsApi = createApi({
  reducerPath: 'artistsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://640799f62f01352a8a7faa72.mockapi.io/api/',
  }),
  endpoints: (builder) => ({
    getAllArtists: builder.query<Artist[], void>({
      query: () => 'artists',
    }),
    getArtistById: builder.query<Artist, string>({
      query: (id) => `artists/${id}`,
    }),
    getSongsByArtist: builder.query<
      Song[],
      {
        id: string;
        params: {
          page: number;
          limit: number;
        };
      }
    >({
      query: ({ id, params }) => ({
        url: `artists/${id}/songs`,
        params,
      }),
    }),
    getSongById: builder.query<
      Song,
      {
        artistId: string;
        id: string;
      }
    >({
      query: ({ artistId, id }) => `artists/${artistId}/songs/${id}`,
    }),
  }),
});

export const {
  useGetAllArtistsQuery,
  useGetArtistByIdQuery,
  useGetSongsByArtistQuery,
  useGetSongByIdQuery,
} = artistsApi;

export default artistsApi;
