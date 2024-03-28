import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../styles/Header.css';

const Header = () => {

    let { user, logout } = useContext(AuthContext);
    

    return (
        <div className='header'>
            <Link className='link' to='/'>MedApp</Link>
            {user ? (
                <Link className='link' onClick={logout} to='/login'>Logout</Link>
            ): (
                <Link className='link' to='/login'>Login</Link>
            )}
            
        </div>
    )
}

export default Header