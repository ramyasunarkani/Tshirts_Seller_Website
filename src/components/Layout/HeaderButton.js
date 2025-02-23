import React, { useContext, useState } from 'react';
import './HeaderButton.css';
import icon from '../assests/icon.jpeg';
import Button from '../UI/Button/Button';
import CartContext from '../../store/CartContext/CartContext';
import CartList from '../Cart/CartList';

function HeaderButton(props) {
  const { totalCartCount } = useContext(CartContext);
 

  

  return (
    <div className="header-container">
      <Button className="cart" onClick={props.onClick}>
        <span className="icon"><img src={icon} alt='Cart Icon' /></span>
        <span>Your Cart</span>
        <span className="badge">{totalCartCount}</span>
      </Button>
    </div>
  );
}

export default HeaderButton;
