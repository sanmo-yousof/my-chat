import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <div className="p-4 flex justify-center items-center h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
