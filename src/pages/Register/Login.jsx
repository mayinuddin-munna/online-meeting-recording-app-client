import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/register-bg.png';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

  return (
    <div className="flex justify-center items-center p-5 md:p-20 h-screen ms-0" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <div className='flex flex-container md:flex-row rounded'>
                {/* left div */}
                <div className="flex flex-col p-8 bg-primary rounded-l-lg w-1/2 md:rounded-l-lg justify-between md:w-1/2" style={{backgroundColor: '#084B3E'}}>
                    <div className="flex text-left  rounded-full h-20 w-20 ms-0">
                        <img src="" alt="Logo" className="h-16" />
                    </div>
                    <p className="text-left text-[30px] items-center justify-between text-yellow-100 mb-0">
                        Your text here. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                {/* right div */}
                <div className=" bg-white rounded-r-lg p-8 rounded shadow-md w-1/2">
                    <p className="mb-4 text-xl">Let's get started
                    <br />
                        with a few simple steps</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="text-sm font-medium flex items-center">
                                    <span className=' mr-2'>Email</span>
                                    <span className='text-red-700 text-xs'>*</span>

                            </label>
                            <input
                                type="email"
                                name="email"
                                {...register("email", { required: true })}
                                className="w-full border-b border-gray-300 px-3 py-2"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
                        </div>
                        <div className="mb-4">
                            <label className="flex text-sm font-medium">
                            <span className=' mr-2'>Password</span>
                            <span className='text-red-700 text-xs mt-1'>*</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                {...register("password", { required: true })}
                                className="w-full border-b border-gray-300 px-3 py-2"
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">Password is required</p>}
                            
                        </div>
                        <Link to='/forget-password'><p className='mb-6'><span className=" text-green-500" >Forget Password</span></p></Link>
                        <div>
                            <button
                                type="submit"
                                className="w-full font-bold text-white p-5 rounded hover:bg-green-800"
                                style={{backgroundColor: '#00C38B'}}
                            >
                               Login
                            </button>
                            
                        </div>
                        <div className='mt-20'>
                            <p>By signing up, you agree to our Terms of Service.</p>
                            <p><span>Don't have an account? <Link className=" text-green-500" to='/register'>Sign Up</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
  );
};

export default Login;
