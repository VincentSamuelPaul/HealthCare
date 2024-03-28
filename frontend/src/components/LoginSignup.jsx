import React from 'react';
import '../styles/main.css';

const LoginSignup = ({ inUp, setInUp }) => {
    return (
        <div className='loginsignup'>
            { !inUp ? <h2 className='title' onClick={() => setInUp(!inUp)}>Login</h2> : <h2 onClick={() => setInUp(!inUp)}>Login</h2> }
            { !inUp ? <h2 onClick={() => setInUp(!inUp)}>SignUp</h2> : <h2 className='title' onClick={() => setInUp(!inUp)}>SignUp</h2> }
        </div>
    )
}

export default LoginSignup