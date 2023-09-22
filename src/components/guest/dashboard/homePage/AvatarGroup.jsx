import Image from 'next/image';
import React from 'react';

const AvatarGroup = ({ member }) => {
    return (
        <>
            <div className="avatar">
                <div className="w-[34px]">
                    <Image src={member.image} alt='Avatar' width={30} height={30} className='rounded-circle hover:z-40 hover:absolute' />
                </div>
            </div>
           
        </>
    );
};

export default AvatarGroup;