import { createApi } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath:"cartApi",
  baseQuery: {
    baseUrl: "https://dummyjson.com/carts",
  },

  endpoints: (builder) => ({
    getAllCarts: builder.query({
      query: () => ({
        url: "/",
      }),
    }),
  }),
});

export const { useGetAllCartsQuery } = cartApi;
