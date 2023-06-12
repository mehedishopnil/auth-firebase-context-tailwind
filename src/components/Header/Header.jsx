import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch( error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-3xl">AuthContext</a>
                <Link className="btn btn-ghost normal-case text-xl" to = '/'>Home</Link>
                {user && <Link className="btn btn-ghost normal-case text-xl" to = '/profile'>Profile</Link>}
                <Link className="btn btn-ghost normal-case text-xl" to = '/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to = '/register'>Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to = '/orders'>Orders</Link>
               

                {
                    user ? <>
                    <span>{user.email}</span>
                    <button onClick={handleLogOut} className="btn btn-xs ml-4">Sign Out</button>

                    </> : <Link to = '/login' className="btn btn-xs">Sign In</Link>
                }
            </div>
        </div>
    );
};

export default Header;