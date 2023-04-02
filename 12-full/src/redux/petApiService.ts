import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Animal,
  BreedListAPIResponse,
  Pet,
  PetAPIResponse,
  SearchParams,
} from "../types/APIResponses";

export const petApi = createApi({
  reducerPath: "petApi",
  // global configuration for the api time refetch
  keepUnusedDataFor: 30,
  baseQuery: fetchBaseQuery({ baseUrl: "http://pets-v2.dev-apis.com" }),
  endpoints: (builder) => ({
    getPet: builder.query<Pet, string>({
      query: (id: string) => ({ url: "pets", params: { id } }),
      transformResponse: (response: PetAPIResponse) => response.pets[0],
    }),
    getBreeds: builder.query<string[], Animal>({
      query: (animal) => ({ url: "breeds", params: { animal } }),
      transformResponse: (response: BreedListAPIResponse) => response.breeds,
    }),
    search: builder.query<Pet[], SearchParams>({
      query: ({ animal, location, breed }) => ({
        url: "pets",
        params: { animal, location, breed },
      }),
      transformResponse: (response: PetAPIResponse) => response.pets,
    }),
  }),
});
export const { useGetPetQuery, useGetBreedsQuery, useSearchQuery } = petApi;
