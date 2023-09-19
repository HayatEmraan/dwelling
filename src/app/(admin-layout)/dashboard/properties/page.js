import PropertyManagement from "@/components/dashboard/propertyPage/PropertyManagement";
import PropertyTotal from "@/components/dashboard/propertyPage/PropertyTotal";
import { getproperties } from "@/utils/async/admin/properties/getproperties";
import React from "react";

const PropertyPage = async () => {
  const data = await getproperties();
  return (
    <div className=" dark:bg-slate-700 m-5 dark:m-0 dark:p-5">
      <h2 className="text-3xl pb-4 font-bold sm:px-6 dark:text-white">
        Property Management
      </h2>
      <PropertyTotal></PropertyTotal>
      <PropertyManagement data={data}></PropertyManagement>
    </div>
  );
};

export default PropertyPage;
