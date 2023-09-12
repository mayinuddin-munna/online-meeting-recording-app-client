import Swal from "sweetalert2";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/register-bg.png";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();

    createUser(email, password)
      .then((authUser) => {
        updateUserProfile(username, photoURL)
          .then(() => {
            const userData = {
              email: email,
              username: username,
              photo: photoURL,
              role: "user",
            };

            fetch("https://galaxy-meeting.onrender.com/add-users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userData),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Account created successfully.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
          })
          .catch((error) => console.log(error));
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div
      className="registerContainer"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="registerSubContainer">
        <div className="registerLeftDiv">
          <div className="registerLogoDiv">
            <Link to="/">
              <img
                src="https://i.ibb.co/821XCP8/galaxy-meeting-LIGHT.png"
                alt="Logo"
                className="h-16"
              />
            </Link>
          </div>
          <p className="registerLeftPara">
            Unlocking the Power of Virtual Collaboration
          </p>
        </div>
        <div className="registerRightDiv">
          <p className="registerRightHeading">
            Lets get started
            <br />
            with a few simple steps
          </p>
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label className="registerFormLabel">
                <span className=" mr-2">Username</span>
                <span className="registerFormStar">*</span>
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="name"
                name="username"
                value={username}
                //  {...register("name", { required: true })}
                className="registerInputBorder"
                required
              />
              {/* {errors.name && <p className="registerError">Name is required</p>} */}
            </div>
            <div className="mb-4">
              <label className="registerFormLabel">
                <span className=" mr-2">PhotoURL</span>
                <span className="registerFormStar">*</span>
              </label>
              <input
                onChange={(e) => setPhotoURL(e.target.value)}
                type="text"
                name="photoURL"
                value={photoURL}
                className="registerInputBorder"
                required
              />
            </div>
            <div className="mb-4">
              <label className="registerFormLabel">
                <span className=" mr-2">Email</span>
                <span className="registerFormStar">*</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                value={email}
                //{...register("email", { required: true })}
                className="registerInputBorder"
                required
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
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                value={password}
                // {...register("password", { required: true })}
                className="registerInputBorder"
                required
              />
              {/* {errors.password && (
                <p className="registerError">Password is required</p>
              )} */}
            </div>

            <div>
              <button
                type="submit"
                className="registerBtn"
                style={{ backgroundColor: "#00C38B" }}
              >
                Sign Up
              </button>
            </div>
            <div className="mt-5">
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
