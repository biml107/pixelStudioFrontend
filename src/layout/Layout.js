import { Outlet } from "react-router-dom";

import Header from "./Header";
import CategoryNavbar from "./CategoryNavbar";
import Footer from "./Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp";

const Layout = () => {
  return (
    <>
      <Header />

      <CategoryNavbar />

      <Outlet />

      <Footer />

      <FloatingWhatsapp />
    </>
  );
};

export default Layout;