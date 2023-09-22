"use client"
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { googleLogin, facebookLogin, githubLogin } from "./operations";

const Interactivity = () => {
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={githubLogin}
        className="flex items-center gap-2 border border-black p-2 rounded-md justify-center"
      >
        <FaGithub size={22} />
        <h1>Continue with Github</h1>
      </button>
      <button
        onClick={googleLogin}
        className="flex items-center gap-2 border border-black p-2 rounded-md justify-center"
      >
        <FcGoogle size={22} />
        <h1>Continue with Google</h1>
      </button>
      <button
        onClick={facebookLogin}
        className="flex items-center gap-2 border border-black p-2 rounded-md justify-center"
      >
        <FaFacebook size={22} />
        <h1>Continue with Facebook</h1>
      </button>
    </div>
  );
};

export default Interactivity;
