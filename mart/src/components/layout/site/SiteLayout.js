import React from "react";
import { Route,Routes } from 'react-router-dom'

import Header from "../../page/site/header";
import Home from "../../page/site/Home";
import Shop from "../../page/site/Shop";
import ShopDetail from "../../page/site/ShopDetail";
import ShoppingCart from "../../page/site/ShoppingCart";
import Checkout from "../../page/site/Checkout";
import Footer from "../../page/site/footer";

const SiteLayout = () => {
  return (
    <>
      <Header />
      <div>
        <div>
            <Routes>
                <Route exact path="*" element={<Home/>}/>
                <Route path="shop" element={<Shop />}/>
                <Route path="shop-detail" element={<ShopDetail />}/>
                <Route path="shopping-cart" element={<ShoppingCart />}/>
                <Route path="checkout" element={<Checkout />}/>
            </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SiteLayout;
