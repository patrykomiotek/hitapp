import { Outlet } from "react-router-dom";

import { ErrorBoundary } from "../ErrorBoundary";
import { Footer } from "./Footer";
import { Menu } from "./Menu";

export const Layout = () => {
  return (
    <div>
      <Menu />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </div>
  );
};
