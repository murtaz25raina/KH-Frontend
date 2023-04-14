import React from "react";
import { useFetch } from "../../hooks/useFetch";

const LargeImage = ({catId})=>{
    
  const { data,loading,error } = useFetch(
    `/categories/${catId}?populate=*`
  );

  const url = process.env.REACT_APP_UPLOAD_URL + data?.attributes?.image?.data?.attributes?.url;
  return(
    <img src={url} alt="#" className="catImg" />
  )
}

export default LargeImage;