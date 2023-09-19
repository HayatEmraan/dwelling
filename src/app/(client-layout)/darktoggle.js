"use client"
import ThemeButton from "@/components/dashboard/homePage/ThemeButton";
import React, { useEffect, useState } from "react";

const DarkToogle = () => {
  const [theme, setTheme] = useState(false);
  useEffect(() => setTheme(true), []);
  return (
    <div className="flex space-x-4 items-center">
      {theme && <ThemeButton />}
    </div>
  );
};

export default DarkToogle;
