import React from "react";
import { RouteConstants } from "../constants/RouteConstants";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function Header() {
  const location = useLocation();

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
          <span className="badge">13</span>
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
