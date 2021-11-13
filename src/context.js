import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext();


const AppProvider = ({ children }) => {

  const [cart, setCart] = useState(cartItems)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setCart(json);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
  }, []);


  return (
    <AppContext.Provider
      value={{
        cart: cart,
        removeItem: id => {
          const newCart = cart.filter((item) => item.id !== id);
          setCart(newCart);
        }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
