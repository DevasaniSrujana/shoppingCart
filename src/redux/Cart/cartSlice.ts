import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import cartData from '../../components/shoppingCart.json'; 

interface Cart {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface CartState {
  cartItems: Cart[];
  items: Cart[];
  value: number; 
}

const loadCartFromLocalStorage = (): Cart[] => {
  const savedCart = localStorage.getItem('cartItems');
  if (savedCart) {
    return JSON.parse(savedCart);
  }
  return [];
};

const saveCartToLocalStorage = (cartItems: Cart[]) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const initialState: CartState = {
  cartItems: loadCartFromLocalStorage(), 
  items: cartData.carts.map(cart => ({ ...cart, quantity: 1 })),
  value: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Cart>) {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state.cartItems);
    },
    increment(state, action: PayloadAction<{ id: number }>) {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        saveCartToLocalStorage(state.cartItems);
      }
    },
    decrement(state, action: PayloadAction<{ id: number }>) {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCartToLocalStorage(state.cartItems); 
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      saveCartToLocalStorage(state.cartItems); 
    }
  },
});

export const { addToCart, increment, decrement, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
