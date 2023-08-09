import React from 'react'
import HomeImage from '../../assets/bunner-image/bunner-image.png'
import HomeIcon from '../../assets/home-icon.png'

const Home = () => {
    return (
        <div className='container mx-auto flex md:items-center justify-around flex-col md:flex-row py-10 px-8 lg:px-0'>
            <div className="flex-1">
                <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold inline text-black'>Galaxy meet <br /> without a <br /> Hitch <span><img src={HomeIcon} alt="home-icon" className='inline w-8' /></span></h1>
                <p className='my-8 md:my-12'>Distance doesn t matter. Ii's the meeting <br /> that matter the most.</p>
                <div className="flex flex-row md:flex-col lg:flex-row gap-4">
                    <input type="text" placeholder='insert your meeting link' className='border-2 px-4 py-2 rounded-xl focus:ring focus:ring-blue-200' />
                    <button className='px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-xl rounded-xl transition'>Start Meeting</button>
                </div>
            </div>
            <div className="flex-1">
                <img src={HomeImage} alt="glaxy-meet bunner" className='w-full' />
            </div>
        </div>
    )
}

export default Home