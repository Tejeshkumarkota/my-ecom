import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../store/redux/actions";
import { RouteConstants } from "../constants/RouteConstants";
import FavButton from "./FavButton";

const ProductCard = ({ product = {},isfavourite=false,callWishlist=()=>{}}) => {
  const [isCart, setIsCart] = useState(false);
  const dispatch = useDispatch();
  const handleAddandRemoveWihslist =(id) => {
    console.log(id)
    if(isfavourite && id){
      console.log('if',isfavourite)
      dispatch(actions.deleteWishList_Products(id))
    }else{
      console.log('else',isfavourite)
      dispatch(actions.postWishList_Products(id))
    }
    callWishlist(product?.id)
  }
 
  return (
    <div className="product-card">
      <Link to={RouteConstants.PRODUCT_DETAILS + product?.id}>
        <img
          src={product?.thumbnail}
          height="150"
          className="prod-img"
          width="300"
          alt="Product Image"
        />
        <h2 className="text-black">{product?.title}</h2>
      </Link>
      <div className="like">
        <FavButton
          favClick={()=>handleAddandRemoveWihslist(product.id)}
          isfavourite={isfavourite}
        />
      </div>
      <p className="desc">{product?.description}</p>
      <div className="d-flex price-sec">
        <p className="price mb-0">${product?.price}</p>
        {/* <p>4.9</p> */}
        {isCart ? (
          <button className="add-cart-btn">Remove</button>
        ) : (
          <button className="add-cart-btn">Add to Cart</button>
        )}
        {/* <button className="add-cart-btn btn-icon">
      <CachedOutlinedIcon/> Adding to Cart
      Added to Cart
    </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
