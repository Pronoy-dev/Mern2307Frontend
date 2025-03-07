import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";
import Homepage from "./pages/Home/Index";
import { RootMainLayout } from "./components/RootLayout/RootMainLayout";
import ProductPage from "./pages/Prouduct/Index";
import ProductDetails from "./pages/ProuductDetails/Index";
import Login from "./pages/auth/Login/Login";
import WishList from "./components/WishListComponent/Index";
import AddToCart from "./pages/AddtoCart/AddToCart";
import MYAcount from "./pages/myAcount/Index";
import About from "./pages/About/Index";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Index";
import SignUP from "./pages/SignUP/Index";
import ForgotPassword from "./pages/ForgotPassword/Index";
import OtpVerify from "./pages/OptVerify/Index";
import Checkout from "./pages/Checkout/Index";
import Sucess from "./pages/Sucess.jsx/Sucess";
import Failed from "./pages/paymentFaild/Failed";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootMainLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
        <Route path="/productdetails" element={<ProductPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/addtocart" element={<AddToCart />}></Route>
        <Route path="/myacount" element={<MYAcount />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/singup" element={<SignUP />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otpverify/:email" element={<OtpVerify />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Sucess />} />
        <Route path="/failed" element={<Failed />} />
      </Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
