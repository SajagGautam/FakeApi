import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = authApi;