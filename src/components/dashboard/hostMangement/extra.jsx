import React from 'react';

const HostManagementSection = () => {
  return (
    <section className="bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold mb-4">Host Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Host Card Component */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Host Server 1</h3>
          <p className="text-gray-600 mb-4">CPU: 80% | Memory: 60%</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Manage
          </button>
        </div>

        {/* Host Card Component */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Host Server 2</h3>
          <p className="text-gray-600 mb-4">CPU: 70% | Memory: 75%</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Manage
          </button>
        </div>

        {/* Add New Host Card Component */}
        <div className="bg-gray-200 rounded-lg p-6 flex flex-col justify-center items-center">
          <svg
            className="w-12 h-12 text-gray-600 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <p className="text-gray-600 text-sm">Add New Host</p>
        </div>
      </div>
    </section>
  );
};

export default HostManagementSection;
