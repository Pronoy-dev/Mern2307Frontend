import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exlusiveApi = createApi({
  reducerPath: "exclusive",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DOMAIN_NAME,
    credentials: "include",
  }),
  tagTypes: ["cartitem"],
  endpoints: (builder) => ({
    GetAllBanner: builder.query({
      query: () => `/banner`,
    }),
    GetAllCategory: builder.query({
      query: () => `/category`,
    }),
    GetSingleCategory: builder.query({
      query: (cid) => `/category/${cid}`,
    }),
    GetAllFlashSale: builder.query({
      query: () => `/flashsale`,
    }),
    GetAllProduct: builder.query({
      query: () => `/product`,
    }),
    GetSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
    AddtoCart: builder.mutation({
      query: (productinfo) => ({
        url: `addtocart`,
        method: "POST",
        body: productinfo,
      }),
    }),
    GetuserCartItem: builder.query({
      query: (userid) => `/addtocart/${userid}`,
      providesTags: ["cartitem"],
    }),
    removeCart: builder.mutation({
      query: (cartid) => ({
        url: `/addtocart/${cartid}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cartitem"],
    }),
  }),
});

export const {
  useGetAllBannerQuery,
  useGetAllCategoryQuery,
  useGetAllFlashSaleQuery,
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useGetSingleCategoryQuery,
  useAddtoCartMutation,
  useGetuserCartItemQuery,
  useRemoveCartMutation,
} = exlusiveApi;
