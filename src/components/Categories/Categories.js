import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Categories.scss";

const Categories = () => {
  const { data, loading, error } = useFetch(
    `/categories?populate=*`
  );

  console.log(data);
  const upload = process.env.REACT_APP_UPLOAD_URL;
  return (
    <div className="categories">
     {data && data.map((item)=>{
      return(
      <div className="card">
        <img src={
          upload+item?.attributes?.image?.data?.attributes?.url
        } alt=""/>
        <Link to={`/products/${item.id}`}>
        <button className="button">{item?.attributes?.title}</button>
        </Link>
      </div>)
})}
    </div>
  );
};

export default Categories;
