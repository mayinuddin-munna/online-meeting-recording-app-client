import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import backgroundImage from "../../assets/register-bg.png";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className="registerContainer"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="registerSubContainer">
        <div className="registerLeftDiv">
          <div className="registerLogoDiv">
            <img src="" alt="Logo" className="h-16" />
          </div>
          <p className="registerLeftPara">
            Your text here. Lorem ipsum dolor sit amet consectetur adipisicing
            elite.
          </p>
        </div>
        <div className="registerRightDiv">
          <Link to="/">
            <IoChevronBackCircleOutline size={36} />
          </Link>
          <p className="mb-4 text-xl pt-10">Forgot password?</p>
          <p>
            Enter the email address you used when you joined and we'll send you
            instructions to reset your password. For security reasons, we do NOT
            store your password. So rest assured that we will never send your
            password via email.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 ms-0 mt-3">
              <p className="registerFormLabel">
                <span className="mt-5 mr-1">Email</span>
                <span className="text-red-700 mt-6">*</span>
              </p>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                className="registerInputBorder"
              />
              {errors.email && (
                <p className="registerError">Email is required</p>
              )}
            </div>
            <button type="submit" className="registerBtn mt-7 bg-[#00C38B]">
              Send Reset Instructions
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
