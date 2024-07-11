import React from "react";
import MasterLayout from "../../../shared/_components/MasterLayout";
import Product from "../../../shared/_ui/Product";
import { useSelector } from "react-redux";

export default function WishList() {

  const whishListData = useSelector((state)=>state.allProducts.wishList)

  return (
    <MasterLayout>
      <h1 className="mb-5">Wishlisted Products</h1>
     {
      !whishListData.data ? (<p>{whishListData.message}</p>) :(
        <p>wish list products</p>
      )
     }
      {/* <Product /> */}
    </MasterLayout>
  );
}
