import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import 'animate.css';
import { useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../../SocialLogin/GoogleLogin';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                user && Swal.fire({
                    title: "Successfully Login",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
        // console.log(email, password);
    }

    const handleCaptcha = () => {
        const user_submit_captcha = captchaRef.current.value;
        if (validateCaptcha(user_submit_captcha)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
        // console.log(user_submit_captcha)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={captchaRef} name="captcha" placeholder="write captcha above" className="input input-bordered" required />
                            <button onClick={handleCaptcha} type='button' className="btn btn-primary btn-xs mt-3">Verify</button>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <GoogleLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;