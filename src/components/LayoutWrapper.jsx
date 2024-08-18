import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MenuBarWrapper from "./MenuBarWrapper";

const LayoutWrapper = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return isLoginPage ? (
    <Outlet />
  ) : (
    <MenuBarWrapper>
      <Outlet />
    </MenuBarWrapper>
  );
};

export default LayoutWrapper;
