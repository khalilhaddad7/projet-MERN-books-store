import { createSlice  } from '@reduxjs/toolkit'
import  Swal  from 'sweetalert2';




const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtocart:(state,action)=>{
            const existingItem = state.cartItems.find(item=>item._id === action.payload._id);
            if(!existingItem){
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product Added To the Cart",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            else{
                Swal.fire({
                    title: "Already Added to the Cart?",
                    text: "!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK!"
                  })
            }
        },
        removeFromcart:(state,action)=>{
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
        },
        clearCart:(state)=>{
            state.cartItems = []

        }

    }
})

export const {addtocart,removeFromcart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;