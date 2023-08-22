import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";

const ButtonGradient = ({children, bg}) => {
  return (
    <button className={`btnGradient px-6 py-3 text-xl ${bg} font-semibold text-white hover:border-2 hover:border-transparent transition-all duration-300 flex items-center justify-between gap-2 rounded-full border-white border-2 mt-5 md:mt-0`}>
    <span>{children}</span>
    <BsArrowRightShort/>
</button>
  )
}

export default ButtonGradient