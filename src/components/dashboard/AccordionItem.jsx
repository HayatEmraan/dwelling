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
                <div className='px-[30px] pb-[20px]'> { desc.map((item, index)=> <li key={index}>{item.title}</li>)}</div>
            </Collapse>
        </div>
    );
};

export default AccordionItem;