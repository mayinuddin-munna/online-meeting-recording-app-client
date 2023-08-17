import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/register-bg.png";

const Register = () => {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };

  console.log(email, username, password);

  return (
    <div
      className="registerContainer"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="registerSubContainer">

        <div className="registerLeftDiv">
          <div className="registerLogoDiv">
            <img src="logo" alt="Logo" className="h-16" />
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
