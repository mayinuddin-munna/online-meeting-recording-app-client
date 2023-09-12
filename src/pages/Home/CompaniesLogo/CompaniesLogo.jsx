import React from 'react';
import img1 from '../../../assets/companies/1.png'
import img2 from '../../../assets/companies/2.png'
import img3 from '../../../assets/companies/3.png'
import img4 from '../../../assets/companies/4.png'
import img5 from '../../../assets/companies/5.png'
import img6 from '../../../assets/companies/6.png'
import img7 from '../../../assets/companies/7.png'
import img8 from '../../../assets/companies/8.png'
import Marquee from "react-fast-marquee";

const CompaniesLogo = () => {
  return (
    <div className='my-52'>
      <h6 className='text-3xl md:text-4xl lg:text-5xl text-center mb-20 font-bold'>Our Sponsors</h6>

      <Marquee className='bg-gray-200 xl:h-52  py-10' >

        <div className=' grid grid-cols-8 items-center justify-evenly gap-20 pl-10 md:pl-16 lg:pl-16'>
          <img src={img1} className='w-36 cursor-pointer' alt="" />
          <img src={img2} className='w-36 cursor-pointer' alt="" />
          <img src={img3} className='w-36 cursor-pointer' alt="" />
          <img src={img4} className='w-36 cursor-pointer' alt="" />
          <img src={img5} className='w-36 cursor-pointer' alt="" />
          <img src={img6} className='w-36 cursor-pointer' alt="" />
          <img src={img7} className='w-36 cursor-pointer' alt="" />
          <img src={img8} className='w-36 cursor-pointer' alt="" />
        </div>

      </Marquee>

    </div>
  );
};

export default CompaniesLogo;