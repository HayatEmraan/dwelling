import PropertyTotal from "@/components/dashboard/propertyPage/PropertyTotal";
import PropertiesFinanceTable from "@/components/dashboard/propertyPage/propertyFinance/PropertiesFinanceTable";
import PropertyFinanceBarChart from "@/components/dashboard/propertyPage/propertyFinance/PropertyFinanceBarChart";
import PropertyFinanceLineChart from "@/components/dashboard/propertyPage/propertyFinance/PropertyFinanceLineChart";
import { getrooms } from "@/utils/async/host/getrooms";

import React from "react";

const PropertiesFinance = async () => {
  const data = await getrooms();
  return (
    <div className="m-5">
      <div className="mx-auto items-center mt-5">
        <h2>Properties Finance</h2>
        <div>
          <PropertyTotal></PropertyTotal>
          <div className="flex gap-3 my-10 px-7 justify-center items-center">
            <PropertyFinanceLineChart></PropertyFinanceLineChart>
            <PropertyFinanceBarChart></PropertyFinanceBarChart>
          </div>
          <PropertiesFinanceTable data={data}> </PropertiesFinanceTable>
        </div>
      </div>
    </div>
  );
};

export default PropertiesFinance;
