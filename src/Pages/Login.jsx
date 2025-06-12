import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContexts';
import useAuth from '../Hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const { login, loading } = useAuth()
    console.log(loading)
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        //login with firebase
        login(email, password)
            .then(res => {
                console.log(res)
                toast.success("login successful")
            })
            .catch(error => {
                console.log(error)
                toast.error('firebase auth error', error)
        })

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

                <p className="text-center text-sm">
                    Don't have an account?{" "}
                    <Link to='/register' className='link text-green-600'>Register</Link>
                </p>
            <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;