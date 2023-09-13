import React from 'react';
import useAdmin from '../../../../../hooks/useAdmin';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector((state) => state.data.user.user);
    const [isAdmin] = useAdmin();

    /* ----------Admin------------ */
    const admin = (
        <>
            <div className="avatar my-4">
                <div className="mx-auto w-24 rounded-full">
                    <img src={user?.photoURL} />
                </div>
            </div>
            <div className="mb-4">Welcome, {user?.username}</div>
        </>
    );

    /* ----------Users------------ */
    const users = (
        <>
            <div className="avatar my-4">
                <div className="mx-auto w-24 rounded-full">
                    <img src={user?.photoURL} />
                </div>
            </div>
            <div className="mb-4">Welcome, {user?.username}</div>
        </>
    );

    return (
        <div className="font-bold ml-96 m-12">
            <h1 className="text-5xl text-white m-12">
                Welcome to Galaxy Meeting.
            </h1>
            {isAdmin ? admin : users}
        </div>
    );
};

export default Profile;