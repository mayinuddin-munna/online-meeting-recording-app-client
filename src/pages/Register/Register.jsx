import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/register-bg.png";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../../../firebase.config";
import Swal from "sweetalert2";
const auth = getAuth(app);

const Register = () => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        // signInWithEmailAndPassword(auth, email, password)
        //   .then(
        updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then(() => {
            const userData = { email: email, username: username }

            fetch('https://galaxy-meeting.vercel.app/add-users', {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify(userData)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Account created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
                }
              })
          })
          .catch(error => console.log(error))
        // );
      })
      .catch((err) => {
        alert(err);
      });
  };

  // console.log(email, username, password);

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
            elit.
          </p>
        </div>

        <div className="registerRightDiv">
          <p className="registerRightHeading">
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
                //{...register("email", { required: true })}
                className="registerInputBorder"
              />
              {/* {errors.email && (
                <p className="registerError">Email is required</p>
              )} */}
            </div>

            <div className="mb-4">
              <label className="registerFormLabel">
                <span className=" mr-2">Username</span>
                <span className="registerFormStar">*</span>
              </label>

              <input
                onChange={e => setUsername(e.target.value)}
                type="name"
                name="username"
                value={username}
                //  {...register("name", { required: true })}
                className="registerInputBorder"
              />
              {/* {errors.name && <p className="registerError">Name is required</p>} */}
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

            <div>
              <button
                onClick={handleSignUp}
                type="submit"
                className="registerBtn"
                style={{ backgroundColor: "#00C38B" }}
              >
                Sign Up
              </button>
            </div>

            <div className="mt-10">
              <p>By signing up, you agree to our Terms of Service.</p>
              <p>
                <span>
                  Already have an account?{" "}
                  <Link className="greenText" to="/login">
                    Log in
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

export default Register;
