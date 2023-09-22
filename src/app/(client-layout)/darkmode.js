"use client"
import ProviderTheme from "@/utils/themeProvider";
import React from "react";

const DarkMode = ({ children }) => {
  return (
    <ProviderTheme>
      <div>{children}</div>
    </ProviderTheme>
  );
};

export default DarkMode;
