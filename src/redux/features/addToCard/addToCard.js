// import { apiSlice } from "../api/apiSlice";

import { apiSlice } from "../api/apiSlice";


const featherAPI = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addToCartProduct: builder.mutation({
            query: (data) => {
                const id = data.id;
                const body = data.body;
                return {
                    url: `/api/v1/product/add-to-cart/${id}`,
                    method: "POST",
                    body,
                };
            },
        }),
        getAddToCartProducts: builder.query({
            query: () => {
                return {
                    url: `/api/v1/product/get-to-cart`,
                    method: "GET",
                };
            },
        }),
    }),
});

export const {
    useAddToCartProductMutation,
    useGetAddToCartProductsQuery
} = featherAPI;