import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
    
  }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/",
      }),
    }),
    getLimitedProducts: builder.query({
      query: ({limit,skip}) => ({
        url: `products`,
        params:{
          limit,
          skip
        }
      }),
    }),
  }),
});

export const {useGetAllProductsQuery , useGetLimitedProductsQuery} = productApi