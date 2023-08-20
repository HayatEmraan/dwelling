import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaMicrosoft } from "react-icons/fa";
import {
  handleGoogle,
  handleFacebook,
  handleMicrosoft,
} from "@/libs/security/AuthStore";

const Interactivity = () => {
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={handleGoogle}
        className="flex items-center gap-2 border border-black p-2 rounded-md justify-center"
      >
        <FcGoogle size={22} />
        <h1>Continue with Google</h1>
      </button>
      <button
        onClick={handleFacebook}
        className="flex items-center gap-2 border border-black p-2 rounded-md justify-center"
      >
        <FaFacebook size={22} />
        <h1>Continue with Facebook</h1>
      </button>
      <button
        onClick={handleMicrosoft}
        className="flex items-center gap-2 border border-black p-2 rounded-md justify-center"
      >
        <FaMicrosoft size={22} />
        <h1>Continue with Microsoft</h1>
      </button>
    </div>
  );
};

export default Interactivity;
