import React, { useEffect, useState } from "react";
import MasterLayout from "../../../shared/_components/MasterLayout";
import { RouteConstants } from "../../../shared/constants/RouteConstants";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Endpoints } from "../../../shared/constants/Endpoints";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProductDetails() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const nav = useNavigate();
  const param = useParams();

  const goToList = () => {
    nav(RouteConstants.PRODUCTS);
  };

  useEffect(() => {
    axios.get(Endpoints.PRODUCTS + "/" + param.productId).then((res) => {
      setLoading(false);
      setDetails(res.data);
    });
  }, []);

  return (
    <MasterLayout>
      <h1>
        <ArrowBackIosNewOutlinedIcon
          className="c-pointer mr-5"
          onClick={goToList}
        />
        Product Details
      </h1>
      {loading && <div className="text-center">Loading...</div>}
      <div className="product-data">
        <div className="img-border">
          <img
            src={details.images}
            height="300"
            className="prod-img"
            width="300"
            alt="Product Image"
          />
          <div className="like">
            <FavoriteBorderOutlinedIcon className="outlined" />
            {/* <FavoriteIcon className="filled" /> */}
          </div>
        </div>
        <div className="ml-15">
          <h2 className="mt-0 text-black">{details.title}</h2>
          <p>{details.description}</p>
          <div className="d-flex price-sec">
            <p className="price mb-0">${details.price}</p>
            {/* <p>4.9</p> */}
            <button className="add-cart-btn">
              Add to Cart
            </button>
            {/* <button className="add-cart-btn btn-icon">
            <CachedOutlinedIcon/> Adding to Cart
            Added to Cart
          </button> */}
          </div>
        </div>
      </div>
    </MasterLayout>
  );
}
