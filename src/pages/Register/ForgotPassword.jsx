import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
import backgroundImage from "../../assets/register-bg.png";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../../firebase.config";
import Swal from "sweetalert2";

const auth = getAuth(app);

const ForgotPassword = () => {

  const emailRef = useRef();
  const navigate = useNavigate();

  // const {
  //   register,
  //   formState: { errors },
  // } = useForm();

  const handleResetPassword = (event) => {
    event.preventDefault();
    const email = (emailRef.current.value);
    if (!email) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Please provide valid email to reset password!',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Please Check your email address to reset password!',
          showConfirmButton: false,
          timer: 3000
        });
        navigate('/login');
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <div
      className="registerContainer"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="registerSubContainer">
        <div className="registerLeftDiv">
          <div className="registerLogoDiv">
            <img src="https://i.ibb.co/821XCP8/galaxy-meeting-LIGHT.png" alt="Logo" className="h-16" />
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
            Enter the email address you used when you joined and we will send you
            instructions to reset your password. For security reasons, we do NOT
            store your password. So rest assured that we will never send your
            password via email.
          </p>
          <form>
            <div className="mb-4 ms-0 mt-3">
              <p className="registerFormLabel">
                <span className="mt-5 mr-1">Email</span>
                <span className="text-red-700 mt-6">*</span>
              </p>
              <input
                type="email"
                name="email"
                ref={emailRef}
                required
                // {...register("email", { required: true })}
                className="registerInputBorder"
              />
              {/* {errors.email && (
                <p className="registerError">Email is required</p>
              )} */}
            </div>
            <button
              onClick={handleResetPassword}
              type="submit"
              className="registerBtn mt-7 bg-[#00C38B]">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
