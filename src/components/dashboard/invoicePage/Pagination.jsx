import React from "react";

const Pagination = () => {
  return (
    <div>
      <div className="join border rounded-lg items-center">
        <button className="join-item btn">1</button>
        <button className="join-item btn">2</button>
        <button className="join-item btn btn-disabled">...</button>
        <button className="join-item btn">99</button>
        <button className="join-item btn">100</button>
      </div>
    </div>
  );
};

export default Pagination;
