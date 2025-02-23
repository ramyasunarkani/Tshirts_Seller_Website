import React, { useContext } from "react";
import CartContext from "../../store/CartContext/CartContext";
import Modal from "../UI/Modal";
import './CartList.css';
function CartList(props) {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        return <p>Loading cart...</p>;
    }

    const { cartItems,setCartItems, totalPrice } = cartContext;
    function clearCart(){
        setCartItems([]);
    }

    return (
        <Modal onClose={props.onClose}>
         <h2>Your Cart</h2>
         <ul className="cart-list">
                {cartItems.length === 0 ? (
                    <p className="empty-cart">Cart is empty.</p>
                ) : (
                    cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                           <span className="name">  {item.name}</span>
                            {Object.entries(item.sizes)
                                .map(([size, count]) => `${count}${size.toUpperCase()}`)
                                .join(" ")}{" "}
                            {item.price * Object.values(item.sizes).reduce((sum, count) => sum + count, 0)}
                        </li>
                    ))
                )}
            </ul>

            <h3 className="total-price">Total Price: ${totalPrice}</h3>
            <div className="cart-buttons">
                {totalPrice>0&&(<button className="place-order" onClick={clearCart}>Place Order</button>)}
                <button className="cancel" onClick={props.onClose}>Cancel</button>
            </div>
        </Modal>
    );
}

export default CartList;
