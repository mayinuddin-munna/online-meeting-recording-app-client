import React from 'react';
import useAdmin from '../../../../../hooks/useAdmin';
import { useSelector } from 'react-redux';

const Profile = () => {
    const user = useSelector((state) => state.data.user.user);
    const [isAdmin] = useAdmin();

    return (
        <div className="font-bold ml-96 m-12">
            <h1 className="text-5xl text-white m-12">
                Welcome to Galaxy Meeting.
            </h1>
            {/* {isAdmin ? admin : users} */}
        </div>
    );
};

export default Profile;