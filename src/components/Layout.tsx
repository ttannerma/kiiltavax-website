import React from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import Footer from "./Footer";
import ServiceIcons from "./ServiceIcons";
const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <Introduction />
      <ServiceIcons />
      <Footer />
    </div>
  );
};

export default Layout;
