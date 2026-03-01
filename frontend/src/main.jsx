import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";

import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./context/AuthContext.jsx";
import { SocketProvider } from "./context/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <SocketProvider>
        <RouterProvider router={router} />
      </SocketProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </AuthContextProvider>
  </StrictMode>,
);
