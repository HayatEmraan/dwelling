
import PropertyManagement from '@/components/dashboard/propertyPage/PropertyManagement';
import PropertyTotal from '@/components/dashboard/propertyPage/PropertyTotal';
import React from 'react';

const PropertyPage = () => {
    return (
        <div>
            <PropertyTotal></PropertyTotal>
           <PropertyManagement></PropertyManagement>           
        </div>
    );
};

export default PropertyPage;