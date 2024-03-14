import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import LoginPage from "./components/LoginPage.jsx";

import SignUpPage from "./components/SignUpPage.jsx";
import store from "./store.js";
import HomePage from "./components/HomePage.jsx";
import UserPrivateRoute from "./components/userProtectRoute.jsx";
import AddItemsPage from "./components/AddItemsPage.jsx";
import MyBidPage from "./components/MyBidPage.jsx";
import AuctionResultpage from "./components/AuctionResultpage.jsx";
import ShopPage from "./components/ShopPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="" element={<UserPrivateRoute />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/add-item" element={<AddItemsPage />} />
        <Route path="/my-bids" element={<MyBidPage />} />
        <Route path="/auction-results" element={<AuctionResultpage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>{" "}
  </Provider>
);
