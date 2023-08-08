import React from 'react';
import backgroundImage from '../../assets/register-bg.png';

const EmailVerification = () => {
    return (
        <div className="flex justify-center items-center p-5 md:p-20 h-screen ms-0" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <div className='flex flex-container md:flex-row rounded'>
                {/* left div */}
                <div className="flex flex-col items-center justify-between p-8 bg-primary rounded-l-lg w-1/2 md:rounded-l-lg md:w-1/2 " style={{ backgroundColor: '#084B3E', height: '600px' }}>
                    <div className="flex text-left  rounded-full h-20 w-20 ms-0">
                        <img src="" alt="Logo" className="h-16" />
                    </div>
                    <p className="text-left text-[30px]  text-yellow-100 mb-0">
                        Your text here. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                {/* right div */}
                <div className=" bg-white rounded-r-lg p-8 rounded shadow-md w-1/2" style={{ height: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="mb-4 text-xl">Email verification</p>
                    <p>
                        <span>We have sent you a confirmation email 1234@gmail.com
                        follow the instructions in the email</span>
                    </p>
                    <button
                                type="submit"
                                className="w-full font-bold text-white p-5 rounded hover:bg-green-800 mt-10"
                                style={{backgroundColor: '#00C38B'}}
                            >
                               Proceed
                     </button>

                </div>
            </div>

        </div>
    );
};

export default EmailVerification;