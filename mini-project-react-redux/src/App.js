import React, { useState, useEffect } from 'react';
import './App.css';
import { Product } from './features/products/Product';
import { Cart } from './features/cart/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync } from './features/cart/CartSlice';

function App() {
  const [showCart, setShowCart]= useState(false);
  const items= useSelector((state)=>state.cart.items);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAsync())
  }, []);
  
  return (
    <div className="App">
  
      <button onClick={()=>setShowCart(!showCart)}>Cart [ {items.length} ]</button>
     { showCart ?<Cart></Cart> : <Product></Product> } 
   
       
    </div>
  );
}

export default App;
