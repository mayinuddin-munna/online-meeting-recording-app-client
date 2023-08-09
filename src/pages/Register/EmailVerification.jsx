import React from 'react';
import backgroundImage from '../../assets/register-bg.png';

//  Todo:  It is not used yet
const EmailVerification = () => {
    return (
        <div className="registerContainer" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className='registerSubContainer'>
                {/* left div */}
                <div className="registerLeftDiv" style={{ backgroundColor: '#084B3E'}}>
                    <div className="registerLogoDiv">
                        <img src="" alt="Logo" className="h-16" />
                    </div>
                    <p className="registerLeftPara">
                        Your text here. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                {/* right div */}
                <div className=" registerRightDiv">
                    <p className="mb-4 text-xl">Email verification</p>
                    <p>
                        <span>We have sent you a confirmation email 1234@gmail.com
                        follow the instructions in the email</span>
                    </p>
                    <button
                                type="submit"
                                className="registerBtn"
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