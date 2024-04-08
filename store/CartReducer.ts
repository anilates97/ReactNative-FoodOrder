import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        state.cart[itemIndex].quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );

      state.cart = removeItem;
    },
    incrementQuantity: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        state.cart[itemIndex].quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        const removeItem = state.cart.filter(
          (item) => item.id !== action.payload.id
        );

        state.cart = removeItem;
      } else {
        state.cart[itemIndex].quantity--;
      }
    },
    cleanCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  cleanCart,
} = CartSlice.actions;

export default CartSlice.reducer;
