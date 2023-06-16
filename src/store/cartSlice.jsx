import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    cart: [],
    reducers: {
        add(state, action) {
            const product = action.payload;
            const existingproduct= state.find(item=> item.id === product.id);
            if(existingproduct){
                existingproduct.quantity++
            }
            else{
            state.push({...product,quantity:1})
            }
        },
        remove(state, action) {
            return state.filter(item => item.id!== action.payload)
        },
        decrementQuantity(state, action) {
            const productId = action.payload;
            const product = state.find(item => item.id === productId);
            if (product && product.quantity > 1) {
                product.quantity--;
            }
        },
        incrementQuantity(state, action) {
            const productId = action.payload;
            const product = state.find(item => item.id === productId);
            if (product) {
                product.quantity++;
            }
        },
    }

})
export const { add, remove,decrementQuantity,incrementQuantity} = cartSlice.actions
export default cartSlice.reducer