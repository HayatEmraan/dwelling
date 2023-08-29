
import PropertyManagement from '@/components/dashboard/propertyPage/PropertyManagement';
import PropertyTotal from '@/components/dashboard/propertyPage/PropertyTotal';
import React from 'react';

const PropertyPage = () => {
    return (
        <div className='m-5'>
            <h2 className='text-3xl pb-4 font-bold sm:px-6'>Property Management</h2>
            <PropertyTotal></PropertyTotal>
           <PropertyManagement></PropertyManagement>           
        </div>
    );
};

export default PropertyPage;