import React from "react";

const ImagesCom = () => {
  return (
    <div className="my-5">
      <div className="lg:grid gap-2 lg:grid-cols-2">
        <div className="grid-cols-6">
          <img
            className="rounded"
            src="https://images.unsplash.com/photo-1691231862377-7e55d4e6a2c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="grid gap-2 lg:grid-cols-2">
          <div className="">
            <img
              className="rounded object-contain w-full h-full"
              src="https://images.unsplash.com/photo-1670517007659-0f32403f236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded object-contain w-full h-full"
              src="https://images.unsplash.com/photo-1690746138480-1245dc220809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded object-contain w-full h-full"
              src="https://images.unsplash.com/photo-1691231862377-7e55d4e6a2c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="rounded object-contain w-full h-full"
              src="https://images.unsplash.com/photo-1670517007659-0f32403f236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesCom;
