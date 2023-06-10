import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }
    return (
        <div className="hero min-h-screen bg-[#f4f3f3]">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Please Register</h1>
                   
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" required className="input input-bordered text-gray-600 bg-white" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" required className="input input-bordered text-gray-600 bg-white" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered text-gray-600 bg-white" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Link to ='/login'>
                    <label className="label">
                                <a href="#" className=" label-text-alt link link-hover ml-4 mb-4 text-bold text-base">Already Have an Account?</a>
                            </label>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;