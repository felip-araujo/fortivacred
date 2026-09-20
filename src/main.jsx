import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home.jsx";
import Fale from "./pages/Fale.jsx";
import Seguros from "./pages/Seguros.jsx";
import FalarWhatsapp from "./pages/FalarWhatsapp.jsx";

import WhatsAppButton from "./components/WhatsAppButton.jsx";

AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/falar-com-consultor",
    element: <Fale />,
  },

  {
    path: "/seguros",
    element: <Seguros />,
  },

  {
    path: "/falar-whatsapp",
    element: <FalarWhatsapp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    {/* BOTÃO GLOBAL DO WHATSAPP */}
    <WhatsAppButton />

    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="colored"
    />
  </React.StrictMode>
);