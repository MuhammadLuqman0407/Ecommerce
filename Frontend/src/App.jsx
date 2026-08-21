import BestSeller from "./components/BestSeller";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route, Routes, useLocation} from 'react-router-dom'
import {Toaster} from "react-hot-toast";
import BottomBanner from "./components/BottomBanner";
import NewLetter from "./components/NewLetter";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";

import Cart from "./pages/Cart";
import AddAdress from "./pages/AddAdress";
import MyOrders from "./pages/MyOrders";

import SellerLogin from "./components/seller/SellerLogin";
import SellerSignUp from "./components/seller/SellerSignUp";
import SellerLayout from "./components/seller/SellerLayout";
import AddProduct from "./components/seller/AddProduct";
import ProductList from "./components/seller/ProductList";
import SellerOrders from "./components/seller/SellerOrders";

function App() {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin, isSeller } = useAppContext();

  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login/> : null}
      <Toaster />
      <div className={`${isSellerPath ? "" : "px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-32"}`}>
        <Routes>
          <Route path="/" element={  <Home />}   />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<AllProducts />} />
          <Route path="/products/:category/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAdress />} />
          <Route path="/my-orders" element={<MyOrders />} />

          {/* Seller Dashboard & Auth Routes */}
          <Route path="/seller/login" element={<SellerLogin />} />
          <Route path="/seller/signup" element={<SellerSignUp />} />

          {/* Seller Dashboard Routes */}
          <Route
            path="/seller"
            element={
              isSeller ? (
                <SellerLayout>
                  <AddProduct />
                </SellerLayout>
              ) : (
                <SellerLogin />
              )
            }
          />
          <Route
            path="/seller/add-product"
            element={
              isSeller ? (
                <SellerLayout>
                  <AddProduct />
                </SellerLayout>
              ) : (
                <SellerLogin />
              )
            }
          />
          <Route
            path="/seller/product-list"
            element={
              isSeller ? (
                <SellerLayout>
                  <ProductList />
                </SellerLayout>
              ) : (
                <SellerLogin />
              )
            }
          />
          <Route
            path="/seller/orders"
            element={
              isSeller ? (
                <SellerLayout>
                  <SellerOrders />
                </SellerLayout>
              ) : (
                <SellerLogin />
              )
            }
          />
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
}

export default App; 