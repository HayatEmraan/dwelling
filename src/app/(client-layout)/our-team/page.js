
import NewsLetter from '@/components/ourTeam/NewsLetter.';
import Team from '@/components/ourTeam/Team';
import Testimonial from '@/components/ourTeam/Testimonial';
import React from 'react';

export const metadata = {
  title: "Careers - About Us",
  description: "A project by BrightCoders team",
};

const OurTeamPage = () => {
    return (
        <div className='mt-5'>
          
             <Team></Team>
             <Testimonial></Testimonial>
             <NewsLetter></NewsLetter>
             
        </div>
    );
};

export default OurTeamPage;