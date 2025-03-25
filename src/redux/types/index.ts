"use client";

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "../actions/actionTypes";

// Product interface
export interface Product {
    id: number;
    title: string;
    oldPrice: number;
    newPrice: number;
    commentCount: number;
    discount: number;
    image?: string | undefined;
}

// CartItem extends Product and includes quantity
export interface CartItem extends Product {
    quantity: number;
}

// State type for cart
export interface CartState {
    cartItems: CartItem[];
}

// Action interfaces
interface AddToCartAction {
    type: typeof ADD_TO_CART;
    payload: CartItem;
}

interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: number; // ID of the item to remove
}

interface ClearCartAction {
    type: typeof CLEAR_CART;
}

interface IncreaseQuantityAction {
    type: typeof INCREASE_QUANTITY;
    payload: number; // ID of the item to increase quantity
}

interface DecreaseQuantityAction {
    type: typeof DECREASE_QUANTITY;
    payload: number; // ID of the item to decrease quantity
}

// Define all possible cart actions
export type CartActionTypes =
    | AddToCartAction
    | RemoveFromCartAction
    | ClearCartAction
    | IncreaseQuantityAction
    | DecreaseQuantityAction;