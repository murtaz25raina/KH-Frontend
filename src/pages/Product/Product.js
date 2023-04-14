import { useEffect, useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import BalanceIcon from '@mui/icons-material/Balance';
import "./Product.scss";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [mainImg, setMainImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `/products/${id}?populate=*`
  );

  return (
    <div className="product">
     {loading?"loading": <><div className="left">
        <div className="images">
          {data !== null && data.attributes.images.data
            ? data.attributes.images.data.map((img, i) => {
                return (
                  <img
                    src={process.env.REACT_APP_UPLOAD_URL+img?.attributes?.url}
                    alt=""
                    key={i}
                    onClick={(e) => setMainImg(i)}
                  />
                );
              })
            : null}
        </div>
        <div className="mainImg">
          <img src={process.env.REACT_APP_UPLOAD_URL+ data?.attributes?.images.data[mainImg]?.attributes?.url} alt={"img"} />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className="price">{data?.attributes?.price}</span>
        <p>{data?.attributes?.description}</p>
        <div className="quantity">
          <button
            onClick={(e) => {
                setQuantity(prev=> prev>1 ? prev - 1:1);
            }}
          >
            -
          </button>
          {quantity}
          <button
            onClick={(e) => {
                setQuantity(prev=>prev + 1);
            }}
          >
            +
          </button>
        </div>
        <button className="add" onClick={()=>dispatch(addToCart(
          {
            id:data?.id,
            title:data?.attributes?.title,
            description:data?.attributes?.description,
            price:data?.attributes?.price,
            quantitySelected:quantity,
            image:process.env.REACT_APP_UPLOAD_URL+ data?.attributes?.images?.data[0]?.attributes?.url
          }
        ))}>
            <AddShoppingCartIcon/> ADD TO CART
        </button>
      </div></>}
    </div>
  );
};

export default Product;
