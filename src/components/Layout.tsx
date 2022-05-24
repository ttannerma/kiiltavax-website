import React from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import Footer from "./Footer";
const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <Introduction />
      <Footer />
    </div>
  );
};

export default Layout;
