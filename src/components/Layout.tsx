import React from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import Footer from "./Footer";
import ServiceIcons from "./ServiceIcons";
import SecondaryIntroduction from "./SecondaryIntroduction";
const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <Introduction />
      <ServiceIcons />
      <SecondaryIntroduction />
      <Footer />
    </div>
  );
};

export default Layout;
