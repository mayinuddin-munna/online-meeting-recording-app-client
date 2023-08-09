import React from "react";
import backgroundImage from "../../assets/register-bg.png";
import { RiStarFill } from "react-icons/ri";
import { useForm } from "react-hook-form";

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
      className="flex justify-center items-center p-5 md:p-20 h-screen ms-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-container md:flex-row rounded">
        {/* left div */}
        <div
          className="flex flex-col items-center justify-between p-8 bg-primary rounded-l-lg w-1/2 md:rounded-l-lg md:w-1/2 "
          style={{ backgroundColor: "#084B3E", height: "600px" }}
        >
          <div className="flex text-left  rounded-full h-20 w-20 ms-0">
            <img src="" alt="Logo" className="h-16" />
          </div>
          <p className="text-left text-[30px]  text-yellow-100 mb-0">
            Your text here. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        {/* right div */}
        <div
          className=" bg-white rounded-r-lg p-8 rounded shadow-md w-1/2"
          style={{
            height: "600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="mb-4 text-xl">Forgot password?</p>
          <p>
            <span>
              Enter the email address you used when you joined and we'll send
              you instructions to reset your password. For security reasons, we
              do NOT store your password. So rest assured that we will never
              send your password via email.
            </span>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="text-sm font-medium flex">
                <span className=" mt-7 mr-28">Email</span>
                <span className="text-red-700 text-xs mt-6">
                  <RiStarFill />
                </span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                className="w-full border-b border-gray-300 px-3 py-2"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">Email is required</p>
              )}
            </div>
          </form>
          <button
            type="submit"
            className="w-full font-bold text-white p-5 rounded hover:bg-green-800 mt-10"
            style={{ backgroundColor: "#00C38B" }}
          >
            Send Reset Instructions
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
