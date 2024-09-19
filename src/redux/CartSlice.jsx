import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push({ ...action.payload, quantity: action.payload.quantity });
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity = action.payload.quantity;
            }
        },
    },
});

// Selector to get total cart item count
export const selectCartItemsCount = (state) => {
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

// Export the actions
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;