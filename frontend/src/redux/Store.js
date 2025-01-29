import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/features/cart/CartSlice"
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  
})