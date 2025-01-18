import { createSlice } from "@reduxjs/toolkit";
import { SuessToast, ErrorToast, InfoToast } from "../../helpers/Toast";

const initialState = {
  value: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
    totalamount:0,
    totalItem:0
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

    incrementQuantity: (state, action)=> {
      const findindex = state.value.findIndex((item)=> item._id === action.payload._id)
      state.value[findindex].quantity +=1;
      SuessToast(`${action.payload.name} Product Increment`);
      localStorage.setItem("cart", JSON.stringify(state.value));

    },
    decrementQuantity: (state, action)=> {
      const findindex = state.value.findIndex((item)=> item._id === action.payload._id)
      if(state.value[findindex].quantity > 1) {
        state.value[findindex].quantity -=1;
        SuessToast(`${action.payload.name} Product Decrement`);
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
     

    },
    getTotal:(state , action)=> {
      const {amount , item} =  state.value.reduce((initialvalue , item)=>{
        const {price , quantity} = item
        initialvalue.amount += price * quantity;
        initialvalue.item += quantity
        return initialvalue
      }, {amount:0, item:0})

      state.totalItem = item
      state.totalamount = amount
     
    }
    
  },
});

export const { addtoCart, removeCartItem  ,incrementQuantity ,decrementQuantity ,getTotal} = ProductSlice.actions;

export default ProductSlice.reducer;
