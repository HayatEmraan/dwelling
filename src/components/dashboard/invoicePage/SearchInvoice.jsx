import React from "react";
import {RiDeleteBinLine} from "react-icons/ri";

const SearchInvoice = () => {
  return (

     
<div className="navbar bg-base-100">
  <div className="flex-1">
    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
    <button className="btn btn-primary"> +Create New Invoice</button>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-outline btn-primary">
       <p className="bordered"> status</p>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
    
        </li>
        <li><a>One</a></li>
        <li><a>Two</a></li>
        <li><a>Three</a></li>
      </ul>
    </div>
    <p className="text-3xl text-[#eb5555] "><RiDeleteBinLine/></p>
  </div>
</div>

















  
  );
};

export default SearchInvoice;
