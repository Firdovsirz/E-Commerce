// /src/reducers/cartReducer.ts
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../actions/actionTypes';
import { CartActionTypes, CartState, CartItem } from '../types';

const initialState: CartState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If the item already exists, increase its quantity by 1
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the item doesn't exist, add it with quantity 1 (not 2)
        const newItem: CartItem = { ...action.payload, quantity: 1 }; // Set quantity to 1 here
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0), // Remove item if quantity is 0
      };

    default:
      return state;
  }
};

export default cartReducer;