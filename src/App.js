import Header from './components/Layout/Header'
import TshirtsList from './components/Tshirts/TshirtsList';
import AddForm from "./components/UI/AddForm/AddForm";
import FormContextProvider from './store/FormContext/FormContextProvider';
import CartContextProvider from './store/CartContext/CartContextProvider';
import CartList from './components/Cart/CartList';
import { useState } from 'react';
function App() {
  const [cartIsShown,setCartIsShown]=useState(false);
  const onCartShow=()=>{
    setCartIsShown(true);
  }
  const hiddenCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <FormContextProvider>
    <CartContextProvider> 
      {cartIsShown&&<CartList onClose={hiddenCartHandler}/>}
      <Header onCartShow={onCartShow}/>
      <main>
        <AddForm/>
        <TshirtsList/>
      </main>
    </CartContextProvider>
    </FormContextProvider>
  );
}

export default App;
