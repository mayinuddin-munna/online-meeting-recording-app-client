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
            <button onClick={handleGoogleSignIn}
                style={{ backgroundColor: "#00C38B" }}
                className="flex flex-row justify-center items-center registerBtn">
                <FcGoogle size={28}></FcGoogle> <span className='pl-2'>Sign-in with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;