import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/carts",
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      // You can add other headers if needed
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getAllCarts: builder.query({
      query: () => ({
        url: "/",
      }),
    }),
    getSingleCart: builder.query({
      query: () => ({
        url: "/1",
      }),
    }),
  }),
});

export const { useGetAllCartsQuery , useGetSingleCartQuery} = cartApi;
