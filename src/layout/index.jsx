import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="appContainer">
      <Navbar />
      <div className="pageContents">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
