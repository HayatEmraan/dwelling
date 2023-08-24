'use client'
import React, { useState } from 'react';
import { CiHome } from 'react-icons/ci'
import { LiaFileInvoiceSolid } from 'react-icons/lia'
import { LuEdit } from 'react-icons/lu'
import AccordionItem from './AccordionItem';
import Link from 'next/link';
const accordionData = [
    {
        title: "Dashboard",
        icon:  <CiHome />,
        children: [
            {
                title: 'Analytics',
                path: '/dashboard/Analytics'
            },
            {
                title: 'Project',
                path: '/dashboard/project'
            },
            {
                title: 'Ecommerce',
                path: '/dashboard/ecommerce'
            },
            {
                title: 'CRM',
                path: '/dashboard/crm'
            },
            {
                title: 'Finance',
                path: '/dashboard/finance'
            },
            {
                title: 'Users',
                path: '/dashboard/users'
            },
        ]
    },
    {
        title: "Invoice",
        icon:  <LiaFileInvoiceSolid />,
        children: [
            {
                title: 'List',
                path: '/dashboard/list'
            },
            {
                title: 'Detail',
                path: '/dashboard/detail'
            },
            {
                title: 'Invoice Generator',
                path: '/dashboard/generator'
            }
        ]
    },
    {
        title: "Blog",
        icon:  <LuEdit />,
        children: [
            {
                title: 'Author',
                path: '/dashboard/author'
            },
            {
                title: 'Detail',
                path: '/dashboard/detail'
            },
            {
                title: 'Create Post',
                path: '/dashboard/users'
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
        <div className='fixed top-0 dark:lg:w-1/6 dark:w-3/4 dark:bg-slate-800 dark:text-white dark:h-full'>
            <div className='text-2xl font-semibold pt-3 pb-4 text-center '><Link href={'/dashboard'}>Admin Panel</Link></div>
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