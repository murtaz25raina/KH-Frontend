import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import './OrderDetails.scss';


const OrderDetails = () =>{
    const orderId = useParams().id;
  
    const { data, loading, error } = useFetch(
        `/orders?populate=*&[filters][stripeId][$eq]=${orderId}`
      );
    return(
        error
        ? <div>Something went wrong</div>
        : loading ? <div>loading</div> : 
        <div className="orderDetails">
            <h2>Your Orders</h2>
            <h4>Please note the url link for future reference and the Id : {data && data[0]?.attributes?.stripeId}</h4>
         
            {data && data[0]?.attributes?.products?.map((item)=>{
                return(
                    <div className="card" key={item?.id}>
                        <img className="cardImg" src={item?.image} alt="order-image"/>
                        <div className="details">
                            <div className="title">{item?.title}</div>
                            <p className="desc">{item?.description}...</p>
                            <p className="quantity">Quantity : {item?.quantitySelected}</p>
                            <p className="price">Price : ₹ {item?.quantitySelected}*{item?.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
       
    )
}

export default OrderDetails;

