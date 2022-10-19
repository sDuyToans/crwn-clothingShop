import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES  {
    SET_CART_ITEMS = "SET_CART_ITEMS",
    SET_IS_CART_OPEN = "SET_IS_CART_OPEN",
    SET_CART_COUNT = "SET_CART_COUNT",
    SET_CART_TOTAL = "SET_CART_TOTAL"
};
  

export type ItemDetails = CategoryItem & {
    quantity: number
}