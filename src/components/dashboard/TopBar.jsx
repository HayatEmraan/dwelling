import Image from 'next/image';
import React from 'react';
import manuIcon from '../../../public/menu-icon.png'
import { FaSearch } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';
import { AiOutlineBell, AiOutlineMenuFold } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';
import Link from 'next/link';

const TopBar = () => {
    return (
        <div className='flex justify-between sticky z-50 top-0 items-center px-6 py-2 border-r-slate-100 border bg-white'>
            <div className='flex justify-between space-x-4 items-center'>
                <Link href={'/dashboard'} className="text-2xl text-[#624BFF] block md:hidden font-bold">Dwelling</Link>
                <AiOutlineMenuFold className='text-2xl cursor-pointer'/>
                <label htmlFor="search" className='relative hidden md:block'>
                    <input type="search" placeholder="Search" className="px-2 py-2 rounded-md outline-primary border border-slate-300 w-full max-w-xs" />
                    <FaSearch className='absolute right-2 top-1/2 -translate-y-1/2' />
                </label>
            </div>
            <div className='flex space-x-4 items-center'>
                <BsFillSunFill />
                <AiOutlineBell />
                <RxAvatar className='text-4xl' />
            </div>
        </div>
    );
};

export default TopBar;