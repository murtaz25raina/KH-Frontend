import { useState } from "react";
import { useParams } from "react-router-dom";
import LargeImage from "../../components/LargeImage/LargeImage";
import List from "../../components/List/List";
import { useFetch } from "../../hooks/useFetch";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [sort, setSort] = useState(null);
  const [selectedSubcats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubcats, value]
        : selectedSubcats.filter((item) => item !== value)
    );
  };

  // console.log(selectedSubcats);
  // console.log("idar",data)

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data &&
            data.map((cat) => {
              return (
                <div className="inputItem" key={cat?.id}>
                  <input
                    type="checkbox"
                    id={cat?.id}
                    value={cat?.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={cat?.id}>{cat?.attributes?.title}</label>
                </div>
              );
            })}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000000}
              step={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <LargeImage catId={catId}></LargeImage>
        {/* <img src="" alt="#" className="catImg" /> */}
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubcats} />
      </div>
    </div>
  );
};

export default Products;
