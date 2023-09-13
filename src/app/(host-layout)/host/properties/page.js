import HostPropertyTotal from '@/components/host/HostPropertyTotal';
import PropertyHost from '@/components/host/PropertyHost';
import { getproperties } from '@/utils/async/admin/properties/getproperties';
import React from 'react';

const PropertiesHost = async () => {
    const data = await getproperties();
    return (
        <div className="m-5">
           <h2 className="text-3xl pb-4 font-bold sm:px-6">Property Management</h2>
           <HostPropertyTotal></HostPropertyTotal>
           <PropertyHost data={data}></PropertyHost>
        </div>
    );
};

export default PropertiesHost;