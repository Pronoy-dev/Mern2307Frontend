import { createSlice } from "@reduxjs/toolkit";
import { SuessToast, ErrorToast, InfoToast } from "../../helpers/Toast";
import { act } from "react";
const initialState = {
  value: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const findindex = state.value.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (findindex >= 0) {
        state.value[findindex].quantity += 1;
        InfoToast(`${action.payload.name} agin added in cart`);
        localStorage.setItem("cart", JSON.stringify(state.value));
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
        SuessToast(`${action.payload.name} is add to cart`);
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
    },
    removeCartItem: (state, action) => {
      const reduceitem = state.value.filter((item) => {
        return item._id !== action.payload._id;
      });
      state.value = reduceitem;
      ErrorToast(`${action.payload.name} is Removed to cart`);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const { addtoCart, removeCartItem } = ProductSlice.actions;

export default ProductSlice.reducer;
