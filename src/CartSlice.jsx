import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
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
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
