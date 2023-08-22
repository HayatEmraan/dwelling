import { Context } from "@/context/AuthContext";
import React from "react";
import { RxAvatar } from "react-icons/rx";

const AvatarComp = () => {
  const { user } = Context();
  return (
    <button>
      {user?.photoURL ? (
        <img
          className="rounded-full"
          src={user?.photoURL}
          alt=""
          width={24}
          height={24}
        />
      ) : (
        <RxAvatar
          onClick={() => window.my_modal_3.showModal()}
          size="24"
          className="text-white"
        />
      )}
    </button>
  );
};

export default AvatarComp;
