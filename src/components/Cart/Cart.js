import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { removeItem, resetCart } from "../../redux/cartReducer";
import {loadStripe} from '@stripe/stripe-js';
import {makeRequest} from '../../makeRequest';

const Cart = () => {
  const products = useSelector(state=>state.cart.products); 
  const dispatch = useDispatch();

  const totalPrice = ()=>{
    let total = 0;
    products.forEach((item)=>{
      total+= item.quantitySelected * item.price;
      
    })
    return total.toFixed(2);
  }

  const stripePromise = loadStripe('pk_test_51MwOAcSAdCqW9dSkfaj6BcmEXwRiDhZZ2p30RTuV56AUCskCC66vRy6xKq1zfcHaToeZ4RMqg02RjOmcbVYpddio00wWTOqaBk');
  const handlePayment =async ()=>{
    try{
     const stripe = await stripePromise;
     const res =  await makeRequest.post("/orders",{products});
     await stripe.redirectToCheckout({
      sessionId:res.data.stripeSession.id
     })
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products.map((item) => {
        return (
          <div className="item" key={item?.id}>
            <img src={item.image} alt="" />
            <div className="details">
              <h1>{item?.title}</h1>
              <p>{item?.description?.substring(0, 50)}...</p>
              <div className="price">Price : {item?.quantitySelected} x ₹{item.price}</div>
            </div>
            <DeleteOutlinedIcon className="delete" onClick={()=>dispatch(removeItem(item?.id))}/>
          </div>
        );
      })}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>{totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT </button>
      <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  );
};

export default Cart;
