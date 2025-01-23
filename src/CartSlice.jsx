import { createSlice } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';


export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((i) => i.id !== action.payload);

        },
        updateQuantity: (state, action) => {
            const item = state.items.find((i) => i.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }

        },
    },
});
const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
        ...prevState,
        [product.name]: true, // Set the product name as key and value as true to indicate it's added to cart
    }));
};
export const { addItem, updateQuantity, removeItem } = CartSlice.actions;


export default CartSlice.reducer;
