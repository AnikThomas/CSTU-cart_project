import React, { useState, createContext, useEffect } from 'react'
import cartItems from './data'


// ATTENTION!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = createContext();


const AppProvider = ({ children }) => {

  const [cart, setCart] = useState(cartItems)

  //We need useEffect so the fetch will not run on repeat
  useEffect(()=>{
    console.log("fetching");
    fetch(url, {method: "get"})
      .then((res)=> res.json())
      .then((res) => {
        setCart(res);
      })
      .catch((err)=> console.log(err));
    return () => {};
  }, []);


  //Create the Functions we will be needed in our components.
  const removeItem = id => setCart(cart.filter((item) => item.id !== id));
  const increment = id => setCart(cart.map((item)=> {
      if(item.id === id) item.amount++;
      return item;
    })
  );

  const decrement = id => setCart(cart.map((item) => {
      if(item.id === id) item.amount--;
      return item;
    })
      .filter((item) => item.amount > 0) //If quantity is 0 remove it from the array
  )

  const clearCart = () => setCart([]);
  return (
    <AppContext.Provider value={{
        //Function that Defined above
        cart,
        removeItem,
        increment,
        decrement,
        clearCart,
    }}>
        {children}
    </AppContext.Provider>
  );
};


export { AppContext, AppProvider }
