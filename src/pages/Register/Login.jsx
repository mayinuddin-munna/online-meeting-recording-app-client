import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/register-bg.png';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="registerContainer" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='registerSubContainer'>
                {/* left div */}
                <div className="registerLeftDiv hidden sm:flex md:block">
                    <div className="registerLogoDiv">
                        <img src="" alt="Logo" className="h-16" />
                    </div>
                    <p className="registerLeftPara">
                        Your text here. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                {/* right div */}
                <div className=" registerRightDiv">
                    <p className="mb-4 text-xl">Let's get started
                        <br />
                        with a few simple steps</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="registerFormLabel">
                                <span className=' mr-2'>Email</span>
                                <span className='registerFormStar'>*</span>

                            </label>
                            <input
                                type="email"
                                name="email"
                                {...register("email", { required: true })}
                                className="registerInputBorder"
                            />
                            {errors.email && <p className="registerError">Email is required</p>}
                        </div>
                        <div className="mb-4">
                            <label className="registerFormLabel">
                                <span className=' mr-2'>Password</span>
                                <span className='registerFormStar'>*</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                {...register("password", { required: true })}
                                className="registerInputBorder"
                            />
                            {errors.password && <p className="registerError">Password is required</p>}

                        </div>
                        <Link to='/forget-password'><p className='mb-6'><span className=" greenText" >Forget Password</span></p></Link>
                        <div>
                            <button
                                type="submit"
                                className="registerBtn"
                                style={{ backgroundColor: '#00C38B' }}
                            >
                                Login
                            </button>

                        </div>
                                <div className="flex justify-center mt-4">
                                    <FcGoogle size={40} />
                                </div>
                        <div className='mt-6'>
                            <p>By signing up, you agree to our Terms of Service.</p>
                            <p><span>Don't have an account? <Link className=" greenText" to='/register'>Sign Up</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;
