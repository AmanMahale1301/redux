import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath:"cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/carts",
  }),

  endpoints: (builder) => ({
    
    getAllCarts: builder.query({
      query: () => ({
        url: "/",
      }),
    }),

  }),
});

export const { useGetAllCartsQuery } = cartApi;
