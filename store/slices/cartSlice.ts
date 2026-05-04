// import { createSlice } from "@reduxjs/toolkit";

// type CartItem = {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// };

// type CartState = {
//   items: CartItem[];
//   total: number;
// };

// const initialState: CartState = {
//   items: [],
//   total: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id,
//       );
//       if (existingItem) {
//         existingItem.quantity += 1;
//         state.total += existingItem.price;
//       } else {
//         state.items.push(action.payload);
//         state.total += action.payload.price;
//       }
//     },
//     removeFromCart: (state, action) => {
//       const itemToRemove = state.items.find(
//         (item) => item.id === action.payload.id,
//       );

//       if (!itemToRemove) return;

//       item.quantity -= 1;
//       state.total -= itemToRemove.price;
//       if (itemToRemove.quantity <= 0) {
//         state.items = state.items.filter((item) => item.id !== action.payload.id);
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;
