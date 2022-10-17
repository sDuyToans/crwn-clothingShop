import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES, ItemDetails } from "./cart.types";
import { CategoryItem } from "../categories/categories.types";


const addCartItem = (cartItems: ItemDetails[], productToAdd: CategoryItem): ItemDetails[] => {
  //find if cartItems contains productToAdd
  const existingCardItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found, increament quantity
  if (existingCardItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: ItemDetails[], cartItemToRemove: ItemDetails): ItemDetails[] => {
  // find the cart item to remove
  const existingCardItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  //check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCardItem && existingCardItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  //return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: ItemDetails[], cartItemToClear: ItemDetails): ItemDetails[] => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, ItemDetails[]>;

export const setCartItems = withMatcher((cartItems: ItemDetails[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems))

export const addItemToCart = (cartItems: ItemDetails[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems)
};

export const removeItemFromCart = (cartItems: ItemDetails[], cartItemToRemove: ItemDetails) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems)
};

export const clearItemFromCart = (cartItems: ItemDetails[], cartItemToClear: ItemDetails) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems)
};

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen =>
createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));
