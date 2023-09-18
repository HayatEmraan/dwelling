import Example from "@/components/dashboard/homePage/DashPieChart";
import PropertyManagement from "@/components/dashboard/propertyPage/PropertyManagement";
import PropertyTotal from "@/components/dashboard/propertyPage/PropertyTotal";
import PropertyFinanceBarChart from "@/components/dashboard/propertyPage/propertyFinance/PropertyFinanceBarChart";
import PropertyFinanceLineChart from "@/components/dashboard/propertyPage/propertyFinance/PropertyFinanceLineChart";
import HostPropertyChart from "@/components/host/HostPropertyChart";
import { getproperties } from "@/utils/async/admin/properties/getproperties";

import React from "react";

const PropertiesFinance = async () => {
  const data = await getproperties();
  return (
    <div className="m-5">
      <div className="mx-auto items-center mt-5">
        <h2>Properties Finance</h2>
        <div>
          <PropertyTotal></PropertyTotal>
          <div className="flex gap-2 my-10 px-4">
            <PropertyFinanceLineChart></PropertyFinanceLineChart>
            <PropertyFinanceBarChart></PropertyFinanceBarChart>
          </div>
          <PropertyManagement data={data}></PropertyManagement>
        </div>
      </div>
    </div>
  );
};

export default PropertiesFinance;
