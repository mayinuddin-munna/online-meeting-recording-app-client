import React from 'react';
import backgroundImage from '../../assets/register-bg.png';
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className="registerContainer" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className='registerSubContainer'>
                {/* left div */}
                <div className="registerLeftDiv " style={{ backgroundColor: '#084B3E' }}>
                    <div className="registerLogoDiv">
                        <img src="" alt="Logo" className="h-16" />
                    </div>
                    <p className="registerLeftPara">
                        Your text here. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                {/* right div */}
                <div className= "registerRightDiv">
                    <p className="mb-4 text-xl">Forgot password?</p>
                    <p>
                        <span>Enter the email address you used when you joined and we'll send you instructions to reset your password.
                        For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.</span>
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4 ms-0 mt-3">
                            <label className="registerFormLabel">
                                    <span className='mt-5 mr-1'>Email</span>
                                    <span className='text-red-700 mt-6'>*</span>

                            </label>
                            <input
                                type="email"
                                name="email"
                                {...register("email", { required: true })}
                                className="registerInputBorder"
                            />
                            {errors.email && <p className="registerError">Email is required</p>}
                        </div>
                        
                    </form>
                    <button
                                type="submit"
                                className="registerBtn mt-7"
                                style={{backgroundColor: '#00C38B'}}
                            >
                               Send Reset Instructions
                     </button>

                </div>
            </div>

        </div>
    );
};

export default ForgotPassword;