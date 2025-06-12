import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContexts';
import { updateProfile } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../Firebase/firebase.config';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const { singUp } = useAuth()

    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, email, photo, password)
        //register in firebase;
        singUp(email, password)
            .then(res => {
                
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                    toast.success('Register Done!!')
                    })
                    .catch((error) => {
                    console.log(error)
                    });
                console.log(res.user);
                console.log(auth.currentUser)
                
            })
            .catch(error => {
                console.log(error)
                toast.error("firebase auth error", error.error)
            })

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="w-full max-w-md shadow-xl bg-base-100 p-8 rounded-2xl space-y-6">
                <h2 className="text-3xl font-bold text-center text-primary">Register to Your Account</h2>

                <form onSubmit={handleRegister} className="space-y-4">

                    {/* name */}
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="name"
                            placeholder="Nahid"
                            name='name'
                            className="input input-bordered w-full"
                        />
                    </div>
                    {/* email */}
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
                    {/* photoURL */}
                    <div>
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input
                            type="url"
                            placeholder="https://i.ibb.co/wZFQSr1g/hero1.jpg"
                            name='photo'
                            className="input input-bordered w-full"
                        />
                    </div>
                    {/* password */}
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

export default Register;