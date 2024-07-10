import React from "react";
import MasterLayout from "../../../shared/_components/MasterLayout";
import Product from "../../../shared/_ui/Product";

export default function WishList() {
  return (
    <MasterLayout>
      <h1 className="mb-5">Wishlisted Products</h1>
      <p>List of wishlisted products goes here</p>
      <Product />
    </MasterLayout>
  );
}
