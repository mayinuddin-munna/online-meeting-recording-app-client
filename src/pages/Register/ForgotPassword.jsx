import React from 'react';
import backgroundImage from '../../assets/register-bg.png';
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className="flex justify-center items-center p-10 lg:p-48 md:p-20 bg-cover bg-center h-screen ms-0" style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div className='flex flex-container md:flex-row'>
                {/* left div */}
                <div className="flex flex-col p-8 bg-primary rounded-t-lg w-1/2 justify-between md:rounded-l-3xl md:w-1/2 " style={{ backgroundColor: '#084B3E' }}>
                    <div className="flex text-left  rounded-full h-20 w-20 ms-0">
                        <img src="" alt="Logo" className="h-16" />
                    </div>
                    <p className="text-left text-[30px]  text-yellow-100 items-center justify-between mb-0">
                        Your text here. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                {/* right div */}
                <div className= "bg-white rounded-r-3xl p-8 shadow-md w-1/2 h-96 flex flex-col items-center justify-center">
                    <p className="mb-4 text-xl">Forgot password?</p>
                    <p>
                        <span>Enter the email address you used when you joined and we'll send you instructions to reset your password.
                        For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.</span>
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4 ms-0 mt-3">
                            <label className="text-sm font-medium">
                                    <span className=' mr-1'>Email</span>
                                    <span className='text-red-700 mt-6'>*</span>

                            </label>
                            <input
                                type="email"
                                name="email"
                                {...register("email", { required: true })}
                                className="w-full border-b border-gray-300 py-2 mt-2"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
                        </div>
                        
                    </form>
                    <button
                                type="submit"
                                className="w-full font-bold text-white p-4 rounded hover:bg-green-800 mt-4"
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