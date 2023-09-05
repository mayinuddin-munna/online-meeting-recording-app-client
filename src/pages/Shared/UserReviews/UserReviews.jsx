import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import ReviewsBunner from '../../../assets/reviews/reviews-bunner.jpg'
import ButtonGradient from '../../../components/ButtonGradient';
import { getAuth } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

// const auth = getAuth(app);

const UserReviews = () => {
    const user = useSelector((state) => state.data.user.user);
    console.log(user)
  const dispatch = useDispatch();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const selectedPosition = watch('position');

    const onSubmit = async (data) => {
        const { username, email } = user;
        const postData = {...data, name:username, email}
        try {
            const response = await axios.post('http://localhost:8000/add-review', postData);
            // console.log(response.data);

        } catch (error) {
            console.error('Error submitting form:', error);
        }
        reset();
    };
    return (
        <div className="container px-10 mx-auto gap-4 flex items-center justify-center flex-col md:flex-row bg-gray-100">
            <div className='flex-1 rounded shadow-md'>
                <div>
                    <img src={ReviewsBunner} alt="ReviewsBunne" />
                </div>
            </div>
            <div className="bg-white w-full p-6 rounded shadow-md flex-1">
                {/* <h2 className="text-xl font-semibold mb-4">Leave a Review</h2> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                   
                   
                    <div className="mb-4">
        <label htmlFor="position" className="block text-sm font-medium text-gray-700">
          Position
        </label>
        <select
          id="position"
          {...register('position', { required: true })}
          className={`mt-1 p-2 w-full rounded-md border ${errors.position ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select a Position</option>
          <option value="Graphic Designer">Graphic Designer</option>
          <option value="Project Manager">Project Manager</option>
          <option value="IT Manager">IT Manager</option>
          <option value="Sales Representative">Sales Representative</option>
          <option value="Web Developer">Web Developer</option>
          <option value="Student">Student</option>
          <option value="Other">Other</option>
        </select>
        {errors.position && (
          <p className="text-red-500 text-xs mt-1">Position is required</p>
        )}
      </div>

      {selectedPosition === 'Other' && ( // Conditionally render input field if "Other" is selected
        <div className="mb-4">
          <label htmlFor="otherPosition" className="block text-sm font-medium text-gray-700">
            Other Position
          </label>
          <input
            type="text"
            id="otherPosition"
            {...register('otherPosition', { required: true })}
            className={`mt-1 p-2 w-full rounded-md border ${errors.otherPosition ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.otherPosition && (
            <p className="text-red-500 text-xs mt-1">Other Position is required</p>
          )}
        </div>
      )}
                    <div className="mb-4">
                        <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                            Your Feedback
                        </label>
                        <textarea
                            id="feedback"
                            {...register('details', { required: true })}
                            className={`mt-1 p-2 w-full rounded-md border ${errors.feedback ? 'border-red-500' : 'border-gray-300'
                                }`}
                        />
                        {errors.feedback && (
                            <p className="text-red-500 text-xs mt-1">Feedback is required</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                            Ratting (Up to 5)
                        </label>
                        <input
                            type="number"
                            id="reviews"
                            {...register('rating', { required: true, min: 1, max: 5 })}
                            className={`mt-1 p-2 w-full rounded-md border ${errors.rating ? 'border-red-500' : 'border-gray-300'
                                }`}
                        />
                        {errors.rating && (
                            <p className="text-red-500 text-xs mt-1">Between 1 and 5 reviews are allowed</p>
                        )}
                    </div>
                    <button
                        type="submit"
                       
                    >
                        <ButtonGradient bg="bg-gradient-to-r from-purple-500 to-red-500">Review</ButtonGradient>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserReviews