import React from 'react';
import backgroundImage from '../../assets/register-bg.png';

//  Todo:  It is not used yet
const EmailVerification = () => {
    return (
        <div className="flex justify-center items-center p-5 md:p-20 h-screen ms-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className='flex flex-container md:flex-row rounded h-96'>
                {/* left div */}
                <div className="flex flex-col justify-between p-8 bg-primary rounded-l-lg w-1/2 md:rounded-l-lg md:w-1/2 h-96 " style={{ backgroundColor: '#084B3E'}}>
                    <div className="flex text-left  rounded-full h-20 w-20 ms-0">
                        <img src="" alt="Logo" className="h-16" />
                    </div>
                    <p className="text-left text-30px  text-yellow-100 mb-0">
                        Your text here. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                {/* right div */}
                <div className=" bg-white rounded-r-lg p-8 rounded shadow-md w-1/2 h-96 flex flex-col items-center justify-center">
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