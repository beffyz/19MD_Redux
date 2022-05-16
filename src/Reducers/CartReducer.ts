import { createSlice } from '@reduxjs/toolkit';
import { Vehicle } from '../Models/VehicleModel';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [] as Vehicle[],
  },
  reducers: {
    addToCart: (state: {value: Vehicle[]}, action: {payload: Vehicle}) => {
      state.value = [...state.value, action.payload];
    },
    increment: (state: {value: Vehicle[]}, action: {payload: number}) => {
      // @ts-ignore
      state.value.find((n) => n.id === action.payload).count += 1;
    },
    decrement: (state: {value: Vehicle[]}, action: {payload: number}) => {
      // @ts-ignore
      state.value.find((n) => n.id === action.payload).count -= 1;
    },
  },
});

export const {
  addToCart, increment, decrement,
} = cartSlice.actions;

export default cartSlice.reducer;
