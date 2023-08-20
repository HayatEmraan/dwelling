import HeaderComponent from "@/components/shared/header/header";
import React from "react";

import Footer from "@/components/shared/footer/page";

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
