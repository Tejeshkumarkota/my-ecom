import React, { useCallback, useEffect, useState } from "react";
import { RouteConstants } from "../constants/RouteConstants";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../../store/redux/actions'
import { services,getFullUrl } from "../helpers";
import { Endpoints } from "../constants/Endpoints";

export default function Header() {
  const location = useLocation();
  const [wish,setWish] = useState(null)
  // const [error,setError] = useState(null)
  useEffect(() => {
    services.Get(getFullUrl(Endpoints.WISH_LIST)).then((response)=>{
     setWish(response)
    }).catch((err)=>{
      setError(err)
    })
  }, [wish]);
  
  return (
    <div className="header">
      <Link className="logo" to={RouteConstants.HOME}>
        <img src="/assets/images/logo.png" width="70" height="60" alt="Logo" />
      </Link>
      <div className="header-links d-flex">
        <Link className={(location.pathname === RouteConstants.HOME ? "active" : "")} to={RouteConstants.HOME}>Home</Link>
        <Link className={(location.pathname === RouteConstants.PRODUCTS ? "active" : "")} to={RouteConstants.PRODUCTS}>Products</Link>
        <Link className={(location.pathname === RouteConstants.ABOUT_US ? "active" : "")} to={RouteConstants.ABOUT_US}>About us</Link>
        <Link className={(location.pathname === RouteConstants.CONTACT_US ? "active" : "")} to={RouteConstants.CONTACT_US}>Contact us</Link>
        <Link className={(location.pathname === RouteConstants.WISHLIST ? "active" : "")} to={RouteConstants.WISHLIST} title="Wish list">
          <FavoriteBorderOutlinedIcon />
          <span className="badge">{wish?.data?.length ? wish?.data?.length : '0'}</span>
        </Link>
        <Link className={(location.pathname === RouteConstants.CART ? "active" : "")} to={RouteConstants.CART} title="Cart">
          <ShoppingCartOutlinedIcon />
          <span className="badge">1</span>
        </Link>
        <Link className={(location.pathname === RouteConstants.LOGIN ? "active" : "")} to={RouteConstants.LOGIN} title="Login">
          <LoginOutlinedIcon />
        </Link>
      </div>
    </div>
  );
}
