import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./AllSlice/productSlice";
import { ProductApi } from "./Api/ProductApi";
import { exlusiveApi } from "./Api/exclusiveApi";
export const store = configureStore({
  reducer: {
    cartproduct: productSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [exlusiveApi.reducerPath]: exlusiveApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ProductApi.middleware)
      .concat(exlusiveApi.middleware),
});
