import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MasterLayout from "../../../shared/_components/MasterLayout";
import ProductCard from "../../../shared/_ui/ProductCard";
import * as actions from "../../../store/redux/actions";

export default function WishList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.allProducts?.products);
  const wishListData = useSelector((state) => state?.allProducts?.wishList);
  const [wish,setWish] = useState([])
  useEffect(() => {
    callWishlist()
    dispatch(actions.getProducts());
  }, []);
  let callWishlist =()=>{
    dispatch(actions.getWishList_Products());
  }
  let wishList = products?.data?.filter((product) => {
    if (wishListData?.data?.some((wish) => wish.id === product.id)) {
      return product;
    }
  });

  return (
    <MasterLayout>
      <h1 className="mb-5">Wishlisted Products</h1>
      {!products.data ? <p>{products.message}</p> : <p>wish list products</p>}

      {wishList?.map((product, index) => {
        // let fav = wishListData.data?.some((item) => item.id === product.id);
        return (
          <React.Fragment key={index}>
            <ProductCard product={product && product} isfavourite={true} callWishlist={callWishlist} />
          </React.Fragment>
        );
      })}
    </MasterLayout>
  );
}
