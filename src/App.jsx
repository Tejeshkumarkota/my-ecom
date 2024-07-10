import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import PageNotFound from "./core/PageNotFound";
import Login from "./core/auth/Login";
import AboutUs from "./core/screens/AboutUs/AboutUs";
import Cart from "./core/screens/Cart/Cart";
import ContactUs from "./core/screens/ContactUs/ContactUs";
import Home from "./core/screens/Home/Home";
import ProductDetails from "./core/screens/Products/ProductDetails";
import Products from "./core/screens/Products/Products";
import WishList from "./core/screens/WishList/WishList";
import { RouteConstants } from "./shared/constants/RouteConstants";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteConstants.ABOUT_US} element={<AboutUs />} />
        <Route path={RouteConstants.CONTACT_US} element={<ContactUs />} />
        <Route path={RouteConstants.PRODUCTS} element={<Products />} />
        <Route
          path={RouteConstants.PRODUCT_DETAILS+':productId'}
          element={<ProductDetails />}
        />
        <Route path={RouteConstants.WISHLIST} element={<WishList />} />
        <Route path={RouteConstants.CART} element={<Cart />} />
        {/* Auth */}
        <Route path={RouteConstants.LOGIN} element={<Login />} />
        {/* Home */}
        <Route exact path={RouteConstants.HOME} element={<Home />} />
        {/* Wild card routes */}
        <Route
          path={RouteConstants.PAGE_NOT_FOUND}
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
