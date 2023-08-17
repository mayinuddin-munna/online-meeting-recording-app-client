import React from 'react'
import ButtonArrow from '../../components/ButtonArrow';
const Poster = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center lg:w-full mx-auto border-2 bg-slate-400 py-12 md:py-20 px-8 md:px-12 rounded-md bg-gradient-to-r from-purple-500 to-red-500'>
            <h2 className='text-center md:text-left text-white font-semibold text-2xl md:text-3xl lg:text-5xl'>Ensure your Business <br />
            Continuty and Service Level
            </h2>
            <ButtonArrow>
            Discover More
            </ButtonArrow>
        </div>
    </div>
  )
}

export default Poster