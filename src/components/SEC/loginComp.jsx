import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaMicrosoft } from "react-icons/fa";

const LogInComp = () => {
  return (
    <dialog id="my_modal_3" className="modal">
      <form method="dialog" className="modal-box">
        <div className="flex justify-center items-center">
          <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2 text-xl">
            ✕
          </button>
          <h1 className="font-semibold text-xl absolute text-center top-2">
            Log in or sign up
          </h1>
        </div>
        <hr className="my-4" />
        <h3 className="font-bold text-lg">Welcome to Dwelling!</h3>
        <div className="py-4">
          <div class="relative z-0 mb-4">
            <input
              type="text"
              name="email"
              class="peer block w-full appearance-none border rounded-md border-gray-500 bg-transparent py-3 px-2 text-md text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label class="absolute top-3 left-2 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
              Email
            </label>
          </div>
          <div class="relative z-0 mb-4">
            <input
              type="password"
              name="password"
              class="peer block w-full appearance-none border rounded-md border-gray-500 bg-transparent py-3 px-2 text-md text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
            />
            <label class="absolute top-3 left-2 -z-10 origin-[0] -translate-y-6 scale-75 transform text-md text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
              Password
            </label>
          </div>
          <div
            style={{
              backgroundImage:
                "radial-gradient( circle at center,#FF385C 0%,#e61e4d 27.5%,#e31c5f 40%,#d70466 57.5%,#bd1e59 75%,#bd1e59 100% )",
            }}
            className="flex items-center gap-2 border-none text-white p-2 rounded-md justify-center"
          >
            <h1 className="text-xl">Continue</h1>
          </div>
        </div>
        <div className="divider">OR</div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 border border-black p-2 rounded-md justify-center">
            <FcGoogle size={22} />
            <h1>Continue with Google</h1>
          </div>
          <div className="flex items-center gap-2 border border-black p-2 rounded-md justify-center">
            <FaFacebook size={22} />
            <h1>Continue with Facebook</h1>
          </div>
          <div className="flex items-center gap-2 border border-black p-2 rounded-md justify-center">
            <FaMicrosoft size={22} />
            <h1>Continue with Microsoft</h1>
          </div>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default LogInComp;
