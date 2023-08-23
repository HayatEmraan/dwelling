import Link from 'next/link';
import React from 'react';
import { Collapse } from 'react-collapse';
import { GoChevronDown, GoChevronUp } from 'react-icons/go'

const AccordionItem = ({ isOpen, toggle, title, desc, icon }) => {
    return (
        <div className='mt-6'>
            <div className='px-[30px] flex justify-between items-center cursor-pointer'
                onClick={toggle}
            >
                <div className='flex items-center space-x-2'>
                    <span>{icon}</span>
                    <p>{title}</p>
                </div>
                <div>
                    {isOpen ? < GoChevronUp /> : <GoChevronDown />}
                </div>
            </div>
            <Collapse isOpened={isOpen}>
                <div className='px-[30px] pb-[20px]'> { desc.map((item, index)=> {
                    return(
                        <li key={index} className='ml-2 py-[4px]'>
                            <Link href={item.path}>{item.title}</Link>
                        </li>
                    )
                })}</div>
            </Collapse>
        </div>
    );
};

export default AccordionItem;