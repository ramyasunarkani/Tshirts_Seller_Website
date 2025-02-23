import React, { useState, useMemo } from "react";
import CartContext from "./CartContext";

function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Calculate total cart count
    const totalCartCount = useMemo(() => {
        return cartItems.reduce((total, item) => {
            return total + Object.values(item.sizes || {}).reduce((sum, count) => sum + count, 0);
        }, 0);
    }, [cartItems]);

    // Calculate total cart price
    const totalPrice = useMemo(() => {
        return cartItems.reduce((total, item) => {
            return total + Object.entries(item.sizes || {}).reduce(
                (sum, [size, count]) => sum + count * item.price, 0
            );
        }, 0);
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, totalCartCount, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
