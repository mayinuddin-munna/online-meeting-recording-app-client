import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";

const ButtonArrow = ({ children }) => {
    return (
        <button className='px-6 py-3 text-xl font-semibold text-white hover:text-[#1D2E42] hover:bg-white hover:border-2 hover:border-transparent transition-all duration-300 flex items-center justify-between gap-2 rounded-full border-white border-2 mt-5 md:mt-0'>
            <span>{children}</span>
            <BsArrowRightShort />
        </button>
    )
}

export default ButtonArrow