import React from 'react';
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigation } from 'react-router-dom';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const navigate = useNavigation();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                SaveUser(loggedInUser);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="mt-4">
            <button onClick={handleGoogleSignIn} className="flex flex-row justify-center items-center font-medium
            px-4 py-3 bg-white rounded-md hover:bg-[#5EC38B] hover:text-white text-black border border-black hover:border-[#5EC38B]">
                <FcGoogle size={28}></FcGoogle> <span className='pl-2'>Sign-in with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;