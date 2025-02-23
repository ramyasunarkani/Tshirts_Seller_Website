import React, { useContext } from 'react';
import './HeaderButton.css';
import icon from '../assests/icon.jpeg';
import CartContext from '../../store/CartContext/CartContext';

function HeaderButton(props) {
  const { totalCartCount } = useContext(CartContext);
 

  

  return (
    <div className="header-container">
      <button className="cart" onClick={props.onClick}>
        <span className="icon"><img src={icon} alt='Cart Icon' /></span>
        <span>Your Cart</span>
        <span className="badge">{totalCartCount}</span>
      </button>
    </div>
  );
}

export default HeaderButton;
