import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MasterLayout from "../../../shared/_components/MasterLayout";
import ProductCard from "../../../shared/_ui/ProductCard";
import * as actions from "../../../store/redux/actions";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const wishListData = useSelector((state) => state?.allProducts?.wishList);
  useEffect(() => {
    callWishlist();
    dispatch(actions.getProducts());
  }, []);
  let callWishlist = () => {
    dispatch(actions.getWishList_Products());
  };
  return (
    <MasterLayout>
      <h1 className="mb-5">Wishlisted Products</h1>
      {!products.data ? <p>{products.message}</p> : <p>wish list products</p>}
      <div className="product-styles">
        {products.data?.map((product, index) => {
          let fav = wishListData.data?.some((item) => item.id === product.id);
          return (
            <React.Fragment key={index}>
              <ProductCard
                product={product && product}
                isfavourite={fav}
                callWishlist={callWishlist}
              />
            </React.Fragment>
          );
        })}
      </div>
    </MasterLayout>
  );
}
