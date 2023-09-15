import HostPropertyChart from "@/components/host/HostPropertyChart";
import HostPropertyTotal from "@/components/host/HostPropertyTotal";
import PropertyHost from "@/components/host/PropertyHost";
import { getproperties } from "@/utils/async/admin/properties/getproperties";
import React from "react";

const PropertiesHost = async () => {
  const data = await getproperties();
  return (
    <div className="m-5">
      {/* <HostPropertyTotal></HostPropertyTotal> */}
      <div className="mx-auto items-center mt-5">
        <HostPropertyChart></HostPropertyChart>
        <PropertyHost data={data}></PropertyHost>
      </div>
    </div>
  );
};

export default PropertiesHost;
