import React from "react";
import './Card.scss';
import {Link} from 'react-router-dom';
const Card = ({item,id})=>{
    const {data} = item?.images;
    // console.log(data[0]?.attributes?.url)
    const url = process.env.REACT_APP_UPLOAD_URL;
    return(
        <Link className="link" to={`/product/${id}`}>
            <div className="card">
             <div className="image">
                {item.isNew && <span>New Season</span>}
                <img src={url+data[0]?.attributes?.url} alt="img1" className="mainImg"/>
                <img src={url+data[1]?.attributes?.url} alt="img2" className="secondImg"/>
             </div>
             <h2>{item.title}</h2>
             <div className="prices">
                <h3>${item.oldPrice}</h3>
                <h3>${item.price}</h3>
             </div>
            </div>
        </Link>
        
    )
}

export default Card;