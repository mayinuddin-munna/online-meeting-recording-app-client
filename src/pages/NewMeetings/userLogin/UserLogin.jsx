import React from 'react';

const UserLogin = ({ handleSubmit}) => {
    return (
        <div className=" mx-auto my-10">
        <div className="hero-content ">
          <div className="card w-full shadow-2xl bg-slate-500 rounded-lg pt-10">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <div className="form-control">
                <label className="label ">
                  <span className="label-text ml-5 font-bold text-black text-2xl">User name: </span>
                </label>
                <input type="text" name='userName' placeholder="Enter user name..." className="input rounded ml-5 p-2 input-bordered mt-3" required />
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Join!" className="w-1/2 mx-auto registerBtn text-2xl" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UserLogin;