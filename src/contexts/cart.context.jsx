import { createContext, useState, useEffect } from "react";


const addCartItem = (cartItems, productToAdd) =>{
    //find if cartItems contains productToAdd
    const existingCardItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    
    //if found, increament quantity
    if(existingCardItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        );
    }

    //return new array with modified cartItems/ new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
});

export const CartProvider = ({ children }) =>{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCardItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() =>{
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (product) =>{
        setCardItems(addCartItem(cartItems, product))
    }

    const value = { isCartOpen, setIsCartOpen , cartItems, addItemToCart, cartCount}
    return (
        <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    )
}