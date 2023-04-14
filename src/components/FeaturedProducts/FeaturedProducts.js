import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import { useFetch } from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          luctus ante ut quam aliquam fermentum. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Sed molestie vestibulum erat vitae
          eleifend. Maecenas risus nulla, venenatis at bibendum et, laoreet at
          quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "loading"
          : data &&
            data.map((item) => {
              return <Card item={item.attributes} key={item.id} id={item.id} />;
            })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
