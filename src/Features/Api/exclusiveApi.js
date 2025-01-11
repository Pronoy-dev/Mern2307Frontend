import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const exlusiveApi = createApi({
    reducerPath: 'exclusive',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_DOMAIN_NAME  }),
    endpoints: (builder) => ({
      GetAllBanner  : builder.query({
        query: ()=>`/banner`
      }),
      GetAllCategory : builder.query({
        query: ()=> `/category`
      }),
      GetAllFlashSale : builder.query({
        query:()=> `/flashsale`
      })
      ,
      GetAllProduct : builder.query({
        query: ()=>`/product`
      })

    }),
  })

  export const { useGetAllBannerQuery  ,useGetAllCategoryQuery , useGetAllFlashSaleQuery , useGetAllProductQuery} = exlusiveApi
  