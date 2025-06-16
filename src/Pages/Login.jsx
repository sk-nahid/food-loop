import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContexts';
import useAuth from '../Hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const { login, loading, googleLogin } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        

            //login with firebase
            login(email, password)
                .then(res => {
                    toast.success("login successful")
                    navigate(`${location.state ? location.state : "/"}`)

                })
                .catch(error => {
                    console.log(error)
                    toast.error('firebase auth error', error)
                })
            //login with google


        }
        const handleGoogleSingup = () => {
            googleLogin()
                .then(res => {
                    navigate(`${location.state ? location.state : "/"}`)

                })
                .catch(error => console.log(error))

        }
        return (
            <div className="min-h-screen flex items-center justify-center bg-base-200">
                <div className="w-full max-w-md shadow-xl bg-base-100 p-8 rounded-2xl space-y-6">
                    <h2 className="text-3xl font-bold text-center text-primary">Login to Your Account</h2>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="example@email.com"
                                name='email'
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="********"
                                name='password'
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center gap-2">
                                {/* <input type="checkbox" className="checkbox checkbox-sm" />
                            Remember me */}
                            </label>
                            <a href="#" className="text-primary hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                        <input className='btn btn-primary w-full' type="submit" value="Login" />

                    </form>
                    <button onClick={handleGoogleSingup} className="btn w-full bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    <p className="text-center text-sm">
                        Don't have an account?{" "}
                        <Link to='/register' className='link text-green-600'>Register</Link>
                    </p>

                </div>
            </div>
        );
    };

    export default Login;