"use client";


import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actionTypes";
import { CartItem } from "../types";


export const addToCart = (item: CartItem) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeFromCart = (itemId: number) => ({
    type: REMOVE_FROM_CART,
    payload: itemId,
});

export const clearCart = () => ({
    type: CLEAR_CART,
});
export const increaseQuantity = (id: number) => ({
    type: INCREASE_QUANTITY,
    payload: id,
});

export const decreaseQuantity = (id: number) => ({
    type: DECREASE_QUANTITY,
    payload: id,
});