import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../Models/ProductModel';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [] as Product[],
  },
  reducers: {
    addToCart: (state: {value: Product[]}, action: {payload: Product}) => {
      state.value = [...state.value, action.payload];
    },
    increment: (state: {value: Product[]}, action: {payload: number}) => {
      // @ts-ignore
      state.value.find((n) => n.id === action.payload).count += 1;
    },
    decrement: (state: {value: Product[]}, action: {payload: number}) => {
      // @ts-ignore
      state.value.find((n) => n.id === action.payload).count -= 1;
    },
  },
});

export const {
  addToCart, increment, decrement,
} = cartSlice.actions;

export default cartSlice.reducer;
