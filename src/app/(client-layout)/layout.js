import HeaderComponent from "@/components/shared/header/header";
import React from "react";
import Footer from "@/components/shared/footer/page";
import AvatarComp from "@/components/shared/header/avatar";

const ClientLayout = ({ children }) => {
  return (
    <div>
      <HeaderComponent>
        <AvatarComp></AvatarComp>
      </HeaderComponent>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default ClientLayout;
