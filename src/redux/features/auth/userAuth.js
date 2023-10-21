import { apiSlice } from "../api/apiSlice";


const featherAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
        query: (data) => {
          return {
            url: `/api/v1/auth/register`,
            method: "POST",
            body: data,
          };
        },
      }),
    loginUser: builder.mutation({
        query: (data) => {
          return {
            url: `/api/v1/auth/login`,
            method: "POST",
            body: data,
          };
        },
      }),
    getUserProfile: builder.query({
        query: () => {
          return {
            url: `/api/v1/auth/get-user-profile`,
            method: "GET",
          };
        },
      }),
    updateProfile: builder.mutation({
        query: (data) => {
          return {
            url: `/api/v1/auth/update-profile`,
            method: "PATCH",
            body: data,
          };
        },
      }),
  }),
});

export const {
    useCreateUserMutation,
    useLoginUserMutation,
    useGetUserProfileQuery,
    useUpdateProfileMutation
  } = featherAPI;