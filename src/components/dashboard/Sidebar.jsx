'use client'
import React, { useState } from 'react';
import { CiHome } from 'react-icons/ci'
import { LiaFileInvoiceSolid } from 'react-icons/lia'
import { LuEdit } from 'react-icons/lu'
import AccordionItem from './AccordionItem';
const accordionData = [
    {
        title: "Dashboard",
        icon:  <CiHome />,
        children: [
            {
                title: 'Analytics'
            },
            {
                title: 'Project'
            },
            {
                title: 'Ecommerce'
            },
            {
                title: 'CRM'
            },
            {
                title: 'Finance'
            },
        ]
    },
    {
        title: "Invoice",
        icon:  <LiaFileInvoiceSolid />,
        children: [
            {
                title: 'List'
            },
            {
                title: 'Detail'
            },
            {
                title: 'Invoice Generator'
            }
        ]
    },
    {
        title: "Blog",
        icon:  <LuEdit />,
        children: [
            {
                title: 'Author'
            },
            {
                title: 'Detail'
            },
            {
                title: 'Create Post'
            }
        ]
    },
]

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = (index) => {
        if (isOpen === index) {
            return setIsOpen(null);
        }
        setIsOpen(index)
    }

    return (
        <div className='fixed top-0'>
            <div className='text-2xl font-semibold pt-3 pb-4 text-center'>Admin Panel</div>
            <div>
                {
                    accordionData.map((data, index) => {
                        return <AccordionItem
                            toggle={()=>toggle(index)}
                            isOpen={isOpen === index}
                            key={index}
                            title={data.title}
                            desc={data.children}
                            icon={data.icon}
                        />
                    })
                }
            </div>
        </div>
    );
};

export default Sidebar;