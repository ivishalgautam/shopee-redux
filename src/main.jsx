import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import { store } from "./store/store";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="/" element={<App />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product/:id" element={<ProductDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
