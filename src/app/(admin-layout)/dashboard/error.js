"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const router = useRouter();
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    const refreshPage = () => {
      if (refreshCount < 2) {
        setTimeout(() => {
          router.refresh();
          setRefreshCount(refreshCount + 1);
        }, 3000);
      }
    };
    refreshPage();
    return () => {
      clearTimeout(refreshPage);
    };
  }, [router, refreshCount]);

  return (
    <div className="px-2 text-center">
      <div className="min-h-[calc(100vh-60px)] flex flex-col justify-center items-center">
        <h1 className="text-8xl font-extrabold text-red-500">500</h1>
        <p className="text-4xl font-medium text-gray-800">
          Internal Server Error
        </p>
        <p className="text-xl text-gray-800 mt-4">
          We apologize for the inconvenience, we're refreshing the page.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
