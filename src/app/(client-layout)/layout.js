import HeaderComponent from "@/components/header/header";
import React from "react";

import Footer from "@/components/footer/page";

const ClientLayout = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
      <Footer></Footer>
    </div>
  );
};

export default ClientLayout;
