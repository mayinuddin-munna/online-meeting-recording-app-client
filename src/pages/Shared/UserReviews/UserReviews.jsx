import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import ReviewsBanner from "../../../assets/reviews/reviews-bunner.jpg";
import ButtonGradient from "../../../components/ButtonGradient";
import { useDispatch, useSelector } from "react-redux";
import feedbackBackground from "../../../assets/reviews/feedbackBackground.jpg";

const UserReviews = () => {
  const user = useSelector((state) => state.data.user.user);
  // console.log(user);
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const selectedPosition = watch("position");

  const onSubmit = async (data) => {
    const { username, email } = user;
    const postData = { ...data, username, email };
    try {
      const response = await axios.post(
        "https://galaxy-meeting.onrender.com/add-review",
        postData
      );
      // console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    reset();
  };
  return (
    <div className="grid grid-cols-1 justify-items-center px-10 py-10 lg:py-36
    bg-fixed bg-cover bg-center bg-no-repeat w-full h-full"
      style={{ backgroundImage: `url(${feedbackBackground})` }}>
      {/* <div className="rounded shadow-md">
        <div>
          <img src={ReviewsBanner} alt="ReviewBanner" />
        </div>
      </div> */}
      <h2 className="text-5xl font-bold mb-8 text-white">Give a Feedback</h2>
      <div className="bg-white/20 lg:backdrop-blur-2xl sm:w-5/12 xl:w-6/12 border border-white/20 p-6 rounded shadow-2xl">

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: true })}
              value={user.username}
              className={`mt-1 p-2 w-full rounded-md border ${errors.name ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">Name is required</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email", { required: true })}
              value={user.email}
              className={`mt-1 p-2 w-full rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">Email is required</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="position"
              className="block text-sm font-medium text-white"
            >
              Profession
            </label>
            <input
              id="profession"
              {...register("profession", { required: true })}
              className={`mt-1 p-2 w-full rounded-md border ${errors.profession ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.position && (
              <p className="text-red-500 text-xs mt-1">Position is required</p>
            )}
          </div>

          {selectedPosition === "Other" && ( // Conditionally render input field if "Other" is selected
            <div className="mb-4">
              <label
                htmlFor="otherPosition"
                className="block text-sm font-medium text-white"
              >
                Other Position
              </label>
              <input
                type="text"
                id="otherPosition"
                {...register("otherPosition", { required: true })}
                className={`mt-1 p-2 w-full rounded-md border ${errors.otherPosition ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {errors.otherPosition && (
                <p className="text-red-500 text-xs mt-1">
                  Other Position is required
                </p>
              )}
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="feedback"
              className="block text-sm font-medium text-white"
            >
              Your Feedback
            </label>
            <textarea
              id="feedback"
              {...register("details", { required: true })}
              className={`mt-1 p-2 w-full rounded-md border ${errors.feedback ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.feedback && (
              <p className="text-red-500 text-xs mt-1">Feedback is required</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-white"
            >
              Ratting (Up to 5)
            </label>
            <input
              type="number"
              id="rating"
              {...register("age", { min: 1, max: 5 })}
              className={`mt-1 p-2 w-full rounded-md border ${errors.rating ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.rating && (
              <p className="text-red-500 text-xs mt-1">
                Between 1 and 5 reviews are allowed
              </p>
            )}
          </div>
          <button type="submit"
            className="px-8 py-3 m-2 text-lg font-semibold rounded bg-[#5EC38B] text-white hover:bg-green-500"
          >
            Send Feedback
          </button>
        </form>
      </div>
    </div >
  );
};

export default UserReviews;
