import React from "react";
import MasterLayout from "../../../shared/_components/MasterLayout";
import Product from "../../../shared/_ui/Product";

export default function Cart() {
  return (
    <MasterLayout>
      <h1 className="mb-5">Cart</h1>
      <p>List of cart products goes here</p>
      <Product />
    </MasterLayout>
  );
}
