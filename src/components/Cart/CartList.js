import React, { useContext } from "react";
import CartContext from "../../store/CartContext/CartContext";
import Modal from "../UI/Modal";
function CartList(props) {
    const cartContext = useContext(CartContext);

    // Ensure context is available before accessing properties
    if (!cartContext) {
        return <p>Loading cart...</p>;
    }

    const { cartItems, totalPrice } = cartContext;

    return (
        <Modal onClose={props.onClose}>
         <h2>Your Cart</h2>
            <ul className="cart-list">
                {cartItems.length === 0 ? (
                    <p className="empty-cart">Cart is empty.</p>
                ) :(
                    cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                            {item.name}{" "}
                            {Object.entries(item.sizes)
                                .map(([size, count]) => `${count}${size}`)
                                .join(" ")}{" "}
                            {item.price * Object.values(item.sizes).reduce((sum, count) => sum + count, 0)}
                        </li>
                    ))
                )}
            </ul>
            <h3 className="total-price">Total Price: ${totalPrice}</h3>
            <div className="cart-buttons">
                <button className="place-order">Place Order</button>
                <button className="cancel" onClick={props.onClose}>Cancel</button>
            </div>
        </Modal>
    );
}

export default CartList;
