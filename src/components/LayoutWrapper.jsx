import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import MenuBarWrapper from "./MenuBarWrapper";
import ProtectedRoute from "./ProtectedRoute";

const LayoutWrapper = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return isLoginPage ? (
    <Outlet />
  ) : (
    <ProtectedRoute>
      <MenuBarWrapper>
        <Outlet />
      </MenuBarWrapper>
    </ProtectedRoute>
  );
};

export default LayoutWrapper;
