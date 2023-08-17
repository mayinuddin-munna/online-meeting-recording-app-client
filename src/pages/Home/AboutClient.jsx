import React from 'react'
import aboutImg from '../../assets/bunner-image/about-image-main.png'
import ButtonGradient from '../../components/ButtonGradient'
const AboutClient = () => {
  return (
    <div className='container mx-auto my-20'>
        <div className='flex items-center justify-between gap-10 flex-col md:flex-row'>
            <div className="about-client flex-1 ml-14">
                <p className='text-[#995c00] text-xl font-semibold'>About Call Client</p>
                <h2 className='text-[#000] text-4xl font-semibold my-4'>World-Class <br />
                 Contact Center</h2>
                 <p className='text-lg lg:w-[400x] my-6'>
                    Our Agents are fully be-lingual be cultural well educated and have expertise in a wide array of bussinessfunctions such as Debt Collection, Customer Service.
                 </p>
                 <ButtonGradient bg="bg-gradient-to-r from-purple-500 to-red-500">Learn More</ButtonGradient>
            </div>
            <div className="about-image flex-1">
                <img src={aboutImg} alt="" className='rounded w-2/3 mx-auto' />
            </div>
        </div>
    </div>
  )
}

export default AboutClient
