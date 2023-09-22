"use client";
import React from "react";
import { IoFingerPrintOutline } from "react-icons/io5";

const SignModal = () => {
  return (
    <div className="flex items-center justify-center">
      <IoFingerPrintOutline
        onClick={() => my_modal_3.showModal()}
        size="24"
        className="h-4"
      />
      <h1>Sign In</h1>
    </div>
  );
};

export default SignModal;