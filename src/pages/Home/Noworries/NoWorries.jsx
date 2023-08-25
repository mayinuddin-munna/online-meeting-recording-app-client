import React from 'react'
import { BsFill2CircleFill, BsFill1CircleFill } from "react-icons/bs";
const NoWorries = () => {
    return (
        <>
            <div className=' bg-[#111827] text-center'>
                <div className="container mx-auto text-white py-10 md:w-1/2">
                    <h1 className='text-3xl mb-4'>No Worries, No Risk</h1>
                    <p>If you fail to clear the test, no harm done. Your scores will remain private and will not be shared with any company. You will be allowed to retake the test after a stipulated number of days.</p>
                </div>
            </div>
            <div className=' bg-[#050C1B]'>
                <div className="container mx-auto text-white py-12 flex items-center flex-col md:flex-row gap-8 md:gap-4">
                    <div className='flex-1'>
                        <p className='text-center text-2xl'>What can I expect <br /> during the test?</p>
                    </div>
                    <div className='flex-1'>
                        <div className='flex items-center gap-6'>
                        <div className="icon-worries text-2xl bg-[#31D4D2] px-3 rounded-lg py-3 text-black">
                               <BsFill1CircleFill/>
                            </div>
                            <div className="text">
                                <h2 className='text-lg font-semibold mb-2'>1 hr Timed Test</h2>
                                <p>The test will be for a duration of 1 hr.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-6 mt-4'>
                            <div className="icon-worries text-2xl bg-[#31D4D2] px-3 rounded-lg py-3 text-black">
                               <BsFill2CircleFill/>
                            </div>
                            <div className="text">
                                <h2 className='text-lg font-semibold mb-2'>Angular Concepts</h2>
                                <p>It covers topics like MVC Frameworks, Components (Angular, Dynamic, Styling), TypeScript, Two Way Binding and Form Validation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoWorries