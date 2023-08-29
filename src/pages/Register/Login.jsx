import React, { useState } from "react";
//import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/register-bg.png";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebase.config";
import Swal from "sweetalert2";

const auth = getAuth(app);

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result?.user;
        // console.log(user);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Successful',
          showConfirmButton: false,
          timer: 1000
        });
        navigate(from, { replace: true });
      });
  };

  // const {
  //   register, handleSubmit, formState: { errors }, } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  // console.log(email, password)

  return (
    <div
      className="registerContainer"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="registerSubContainer">
        {/* left div */}
        <div className="registerLeftDiv hidden sm:flex md:block">
          <div className="registerLogoDiv">
            <img src="https://i.ibb.co/821XCP8/galaxy-meeting-LIGHT.png" alt="Logo" className="h-16" />
          </div>
          <p className="registerLeftPara">
            Your text here. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        {/* right div */}
        <div className=" registerRightDiv">
          <p className="mb-4 text-xl">
            Lets get started
            <br />
            with a few simple steps
          </p>
          <form>

            <div className="mb-4">

              <label className="registerFormLabel">
                <span className=" mr-2">Email</span>
                <span className="registerFormStar">*</span>
              </label>

              <input
                onChange={e => setEmail(e.target.value)}
                type="email"
                name="email"
                value={email}
                // {...register("email", { required: true })}
                className="registerInputBorder"
              />

              {/* {errors.email && (
                <p className="registerError">Email is required</p>
              )} */}
            </div>

            <div className="mb-4">

              <label className="registerFormLabel">
                <span className=" mr-2">Password</span>
                <span className="registerFormStar">*</span>
              </label>

              <input
                onChange={e => setPassword(e.target.value)}
                type="password"
                name="password"
                value={password}
                // {...register("password", { required: true })}
                className="registerInputBorder"
              />

              {/* {errors.password && (
                <p className="registerError">Password is required</p>
              )} */}
            </div>

            <Link to="/forget-password">
              <p className="mb-6">
                <span className=" greenText">Forget Password</span>
              </p>
            </Link>

            <div>
              <button
                onClick={handleLogin}
                type="submit"
                className="registerBtn"
                style={{ backgroundColor: "#00C38B" }}
              >
                Login
              </button>
            </div>

            <div className="flex justify-center mt-4">
              <FcGoogle size={40} />
            </div>

            <div className="mt-6">
              <p>By signing up, you agree to our Terms of Service.</p>
              <p>
                <span>
                  Do not have an account?{" "}
                  <Link className=" greenText" to="/register">
                    Sign Up
                  </Link>
                </span>
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
