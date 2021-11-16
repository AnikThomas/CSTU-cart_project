import React, { useContext } from "react";
import { AppContext } from "./context";

function CartItem(props) {
    const { id, title, price, img, amount, money } = props;
    const { removeItem, increment, decrement } = useContext(AppContext);
    return (
      <article className="cart-item">
        <img className="cart-item img" src={img} alt="phone" />
        <div>
          <h4>{title}</h4>
          <h4 className="item-price">{money.format(price)}</h4>
          <button className="remove-btn" onClick={() => removeItem(id)}>
            remove
          </button>
        </div>
        <div>
          <button className="amount-btn" onClick={() => increment(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
            </svg>
          </button>
          <p className="amount">{amount}</p>
          <button className="amount-btn" onClick={() => decrement(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
        </div>
      </article>
    );
}
export default CartItem;






// class CartItem extends Component {
    
//     constructor(props){
//         super(props)
//         this.state = {
//             ...props,
//             count: props.amount
//         }
//         this.increment = this.increment.bind(this);
//         this.decrement = this.decrement.bind(this);  
//     }

//     componentDidUpdate() {
//         if(this.state.count === 0){
//             this.context.removeItem(this.state.id)
//         }
//       }

//     increment(){
//         this.setState((prevState)=>({
//             count: prevState.count + 1
//         }))
//     }

//     decrement(){
//         this.setState((prevState)=>({
//             count: prevState.count - 1
//         }))
//     }
  
//     render() {
//         return (
//             <div>
//                 <h4>{this.state.title}</h4>
//                 <h4 className="item-price">{this.state.price}</h4>
//                 <button className="remove-btn" onClick={this.removeItem}>remove</button>
//                 <img className="cart-item img" src={this.state.img} alt="phone"/>
//                 <button className="amount-btn" onClick={this.increment}><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
//                     <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
//                 </svg></button>
//                 <p className="amount">{this.state.count}</p>
//                 <button className="amount-btn" onClick={this.decrement}><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
//                     <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
//                 </svg></button>
//             </div>
//         )
//     }
// }

// CartItem.contextType = AppContext;


