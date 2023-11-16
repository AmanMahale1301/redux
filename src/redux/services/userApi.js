import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
    
  }),

  endpoints: (builder) => ({
    getLimitedUsers: builder.query({
      query: ({limit,skip}) => ({
        url: `users`,
        params:{
          limit,
          skip
        }
      }),
    }),
  }),
});

export const {useGetLimitedUsersQuery} = userApi