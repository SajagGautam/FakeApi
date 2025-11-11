import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<{ access_token: string }, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getUserProfile: builder.query<any, string>({
      query: (token) => ({
        url: "/auth/profile",
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),
  }),
});

export const { useLoginUserMutation, useGetUserProfileQuery } = authApi;
