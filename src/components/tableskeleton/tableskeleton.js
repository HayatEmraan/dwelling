"use client"
import React from "react";

const TableSkeleton = ({ data }) => {
  return (
    <div className="mx-6">
      <div className="max-w-[150rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <table className="min-w-full table">
          <thead>
            <tr>
              <th>
                <div className="skeleton h-5 rounded-md"></div>
              </th>
              <th>
                <div></div>
              </th>
              <th>
                <div></div>
              </th>
              <th>
                <div className="skeleton h-5 rounded-md"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="skeleton h-5 rounded-md"></div>
                </td>
                <td>
                  <div className="skeleton h-5 rounded-md"></div>
                </td>
                <td>
                  <div className="skeleton h-5 rounded-md"></div>
                </td>
                <td>
                  <div className="skeleton h-5 rounded-md"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSkeleton;
