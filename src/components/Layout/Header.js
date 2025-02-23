import React from 'react'
import HeaderButton from './HeaderButton';
import './Header.css'

const Header = (props) => {
  return (
    <header>
    <h1>Tshirts Store</h1>
    <HeaderButton onClick={props.onCartShow}/>
    </header>
  )
}
export default Header;
