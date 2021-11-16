import React, { useContext, useEffect, useState } from "react";
import CartItem from './CartItem';
import { AppContext } from "./context";
//import { useGlobalContext} from "./context";

//Converts a number to US currency string
const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
});

//Defined Cart Container Function
const CartContainer = () => {
  const { cart, clearCart } = useContext(AppContext);
  const [total, setTotal] = useState(0);
  
//Taking advantage of useEffect to calculate the new total when the cart updates.
useEffect(() => {
    let newTotal = 0;
    cart.map((item) =>{
      newTotal = newTotal + item.amount * parseFloat(item.price);
      return null;
    })
    setTotal(newTotal);
    return () => {};
}, [cart]);
  
  if (cart?.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          item.cart = cart;
           // passing the currency so we dont have to redefine it in CartItem
           return <CartItem key={item.id} {...item} money={money} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
          {/* {The formater below adds commas appropriately. ref: line 7 above} */}
            total <span>{money.format(total)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => clearCart()}>clear cart</button>
      </footer>
    </section>
  );
};

  export default CartContainer;