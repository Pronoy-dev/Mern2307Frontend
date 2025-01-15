import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./Features/store.js";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
