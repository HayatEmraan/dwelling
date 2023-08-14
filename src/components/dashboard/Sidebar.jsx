import React from 'react';
import {CiHome} from 'react-icons/ci'
import AccordionItem from './AccordionItem';
const accordionData = [
    {
        title: "title 1",
        desc: "desc 1"
    },
    {
        title: "title 2",
        desc: "desc 2"
    },
    {
        title: "title 3",
        desc: "desc 3"
    },
]

const Sidebar = () => {
    return (
        <div className='px-6'>
            <div className='text-2xl font-semibold pt-3 text-center'>Admin Panel</div>
            <div>
                {
                    accordionData.map((data, index) => {
                        return <AccordionItem />
                    })
                }
            </div>
        </div>
    );
};

export default Sidebar;