import HeaderComponent from "@/components/header/header";
import React from "react";

const ClientLayout = ({ children }) => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  );
};

export default ClientLayout;
