import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const { signInWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(res => {
                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/')
                    })
                console.log(res.user);
            }).catch(error => {
                console.error(error.message);
            })
    }

    return (
        <div>
            <div className="flex items-center justify-center pb-8">
                <button onClick={handleSignInWithGoogle} className="btn">
                    <FaGoogle />
                    Google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;