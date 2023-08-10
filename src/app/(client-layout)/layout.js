import React from "react";

import Footer from "@/components/footer/page";

const ClientLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default ClientLayout;
