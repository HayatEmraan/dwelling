import HostPropertyChart from "@/components/host/HostPropertyChart";
import PropertyHost from "@/components/host/PropertyHost";
import { getrooms } from "@/utils/async/host/getrooms";
import React from "react";

export const metadata = {
  title: "Properties - Host",
  description: "A project by BrightCoders team",
};

const PropertiesHost = async () => {
  const data = await getrooms();
  return (
    <div className="m-5">
      <div className="mx-auto items-center mt-5">
        <HostPropertyChart></HostPropertyChart>
        <PropertyHost data={data}></PropertyHost>
      </div>
    </div>
  );
};

export default PropertiesHost;
