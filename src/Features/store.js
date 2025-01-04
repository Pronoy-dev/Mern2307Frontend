import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./AllSlice/countSlice";
import { ProductApi } from "./Api/ProductApi";
import { exlusiveApi } from "./Api/exclusiveApi";
export const store = configureStore({
  reducer: {
    count: counterSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
    [exlusiveApi.reducerPath]:exlusiveApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware).concat(exlusiveApi.middleware),
});
