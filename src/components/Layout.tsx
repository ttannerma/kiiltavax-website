import React from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import Footer from "./Footer";
import ServiceIcons from "./ServiceIcons";
import SecondaryIntroduction from "./SecondaryIntroduction";
import ContactSection from "./ContactSection";

const Layout: React.FC = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <Introduction />
        <ServiceIcons />
        <SecondaryIntroduction />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
};

export default Layout;
