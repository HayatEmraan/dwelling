"use client";
import React, { useState } from "react";
import Interactivity from "./interactivity";
import { handlePassword, loginAndSignup } from "./operations";

const LogInComp = () => {
  const [logEmail, setLogEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-zA-Z0-9]).{8,}$/;

  const [isReset, setIsReset] = useState(false);
  const handleForgot = (e) => {
    e.preventDefault();
    if (logEmail.length === 0) {
      setErrorEmail("Email cannot be empty");
      return;
    }
    if (!emailRegex.test(logEmail)) {
      setErrorEmail("Enter a valid email");
      return;
    }
    handlePassword(logEmail);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (logEmail.length === 0) {
      setErrorEmail("Email cannot be empty");
      return;
    }
    if (!emailRegex.test(logEmail)) {
      setErrorEmail("Enter a valid email");
      return;
    }
    if (logPassword.length === 0) {
      setErrorPassword("Password cannot be empty");
      return;
    }
    if (!passwordRegex.test(logPassword)) {
      setErrorPassword("Enter a valid password & at least 8 characters");
      return;
    }
    loginAndSignup(logEmail, logPassword);
  };
  return (
    <dialog id="my_modal_3" className="modal">
      <div method="dialog" className="modal-box">
        <div className="flex justify-center items-center">
          <button
            onClick={() => my_modal_3.close()}
            className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2 text-xl"
          >
            ✕
          </button>
          <h1 className="font-semibold text-xl absolute text-center top-2">
            Log in or sign up
          </h1>
        </div>
        {/* login & signup form */}
        <form onSubmit={handleSubmit} className={`${isReset ? "hidden" : ""}`}>
          <hr className="my-4" />
          <h3 className="font-bold text-lg mt-7">Welcome to Dwelling!</h3>
          <div className="py-4">
            <div className="relative z-0">
              <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => {
                  if (emailRegex.test(e.target.value)) {
                    setLogEmail(e.target.value);
                    setErrorEmail("");
                  } else {
                    setLogEmail(e.target.value);
                    setErrorEmail("Invalid email");
                  }
                }}
                className={`peer block w-full appearance-none border rounded-md ${errorEmail === "Invalid email"
                  ? "border-[#C13515] bg-[#FFF8F6]"
                  : "border-gray-500 focus:border-black"
                  } focus:border-2 bg-transparent py-3 px-2 text-md text-gray-900  focus:outline-none focus:ring-0`}
                placeholder=" "
              />
              <label
                htmlFor="email"
                className={`absolute top-3 left-2 z-10 origin-[0] -translate-y-4 scale-75 transform text-md ${errorEmail === "Invalid email"
                  ? "text-[#C13515]"
                  : "text-gray-500"
                  } duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-2 peer-focus:-translate-y-4 peer-focus:scale-75`}
              >
                Email
              </label>
            </div>
            <div
              className={`${errorEmail === "Invalid email" && errorEmail.length > 0
                ? "invisible"
                : "visible"
                } flex items-center my-1 gap-2 text-red-700`}
            >
              {errorEmail !== "Invalid email" && errorEmail.length > 0 && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-label="Error"
                    role="img"
                    focusable="false"
                    style={{
                      display: "block",
                      height: "12px",
                      width: "12px",
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 10.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm.8-6.6H7.2v5.2h1.6z" />
                  </svg>
                  <small>{errorEmail}</small>
                </>
              )}
            </div>
            <div className="relative z-0">
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  if (passwordRegex.test(e.target.value)) {
                    setLogPassword(e.target.value);
                    setErrorPassword("");
                  } else {
                    setLogPassword(e.target.value);
                    setErrorPassword("Invalid password");
                  }
                }}
                className={`peer block w-full appearance-none border rounded-md ${errorPassword === "Invalid password"
                  ? "border-[#C13515] bg-[#FFF8F6]"
                  : "border-gray-500 focus:border-black"
                  } focus:border-2 bg-transparent py-3 px-2 text-md text-gray-900  focus:outline-none focus:ring-0`}
                placeholder=" "
              />
              <label
                htmlFor="password"
                className={`absolute top-3 left-2 z-10 origin-[0] -translate-y-4 scale-75 transform text-md ${errorPassword === "Invalid password"
                  ? "text-[#C13515]"
                  : "text-gray-500"
                  } duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-2 peer-focus:-translate-y-4 peer-focus:scale-75`}
              >
                Password
              </label>
            </div>
            <div
              className={`${errorPassword === "Invalid password" && errorPassword.length > 0
                ? "invisible"
                : "visible"
                } flex my-1 items-center gap-2 text-red-700`}
            >
              {errorPassword !== "Invalid password" &&
                errorPassword.length > 0 && (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      aria-label="Error"
                      role="img"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "12px",
                        width: "12px",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 10.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm.8-6.6H7.2v5.2h1.6z" />
                    </svg>
                    <small>{errorPassword}</small>
                  </>
                )}
            </div>
            <div className="flex gap-2 justify-between mb-2">
              <p className="text-xs my-1">
                We’ll email you for resetting password.{" "}
                <span className="underline">Privacy Policy</span>
              </p>
              <button
                className="hover:underline"
                onClick={() => setIsReset(true)}
              >
                Forgot Password
              </button>
            </div>
            <button
              style={{
                backgroundImage:
                  "radial-gradient( circle at center,#FF385C 0%,#e61e4d 27.5%,#e31c5f 40%,#d70466 57.5%,#bd1e59 75%,#bd1e59 100% )",
              }}
              className="flex items-center gap-2 border-none text-white p-2 rounded-md justify-center w-full"
            >
              <h1 className="text-xl">Continue</h1>
            </button>
          </div>
          <div className="divider">OR</div>
        </form>
        {/* forgot password form */}
        <form onSubmit={handleForgot} className={`${!isReset ? "hidden" : ""}`}>
          <hr className="my-4" />
          <h3 className="font-bold text-lg mt-7">Welcome to Dwelling!</h3>
          <div className="py-4">
            <div className="relative z-0">
              <input
                type="text"
                name="email"
                id="forget_email"
                onChange={(e) => {
                  if (emailRegex.test(e.target.value)) {
                    setLogEmail(e.target.value);
                    setErrorEmail("");
                  } else {
                    setLogEmail(e.target.value);
                    setErrorEmail("Invalid email");
                  }
                }}
                className={`peer block w-full appearance-none border rounded-md ${errorEmail === "Invalid email"
                  ? "border-[#C13515] bg-[#FFF8F6]"
                  : "border-gray-500 focus:border-black"
                  } focus:border-2 bg-transparent py-3 px-2 text-md text-gray-900  focus:outline-none focus:ring-0`}
                placeholder=" "
              />
              <label
                htmlFor="forget_email"
                className={`absolute top-3 left-2 z-10 origin-[0] -translate-y-4 scale-75 transform text-md ${errorEmail === "Invalid email"
                  ? "text-[#C13515]"
                  : "text-gray-500"
                  } duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-2 peer-focus:-translate-y-4 peer-focus:scale-75`}
              >
                Email
              </label>
            </div>
            <div
              className={`${errorEmail === "Invalid email" && errorEmail.length > 0
                ? "invisible"
                : "visible"
                } flex items-center my-1 gap-2 text-red-700`}
            >
              {errorEmail !== "Invalid email" && errorEmail.length > 0 && (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-label="Error"
                    role="img"
                    focusable="false"
                    style={{
                      display: "block",
                      height: "12px",
                      width: "12px",
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm0 10.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm.8-6.6H7.2v5.2h1.6z" />
                  </svg>
                  <small>{errorEmail}</small>
                </>
              )}
            </div>
            <div className="flex gap-2 justify-between mb-2">
              <p className="text-xs my-1">
                We’ll email you for resetting password.{" "}
                <span className="underline">Privacy Policy</span>
              </p>
              <button
                className="hover:underline"
                onClick={() => setIsReset(false)}
              >
                Back
              </button>
            </div>
            <button
              style={{
                backgroundImage:
                  "radial-gradient( circle at center,#FF385C 0%,#e61e4d 27.5%,#e31c5f 40%,#d70466 57.5%,#bd1e59 75%,#bd1e59 100% )",
              }}
              className="flex items-center gap-2 border-none text-white p-2 rounded-md justify-center w-full"
            >
              <h1 className="text-xl">Send Request</h1>
            </button>
          </div>
          <div className="divider">OR</div>
        </form>
        <Interactivity />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default LogInComp;
