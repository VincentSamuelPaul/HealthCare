import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import '../styles/main.css';
import LoginSignup from '../components/LoginSignup';

const LoginPage = () => {

    const {loginUser, signUp, message, inUp, setInUp} = useContext(AuthContext);

    return (
        <div className='container'>
            { inUp ? 
            <div className='inup'>
            <LoginSignup inUp={inUp} setInUp={setInUp} />
                <form id='loginForm' onSubmit={signUp} method='POST'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' required autoComplete='off'/>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" id="password" name="password" required autoComplete='off'></input>
                    <label htmlFor='password'>Email:</label>
                    <input type="email" id="email" name="email" required autoComplete='off'></input>
                    <div>{message}</div>
                    { !inUp ? <button type='submit'>Login</button> : <button type='submit'>SignUp</button> }
                </form>
            </div> :
            <div className='inup'>
            <LoginSignup inUp={inUp} setInUp={setInUp}/>
                <form id='loginForm' onSubmit={loginUser} method='POST'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' required autoComplete='off'/>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" id="password" name="password" required autoComplete='off'></input>
                    <div>{message}</div>
                    { inUp ? <button type='submit'>SignUp</button> : <button type='submit'>Login</button> }
                </form>
            </div>
            }
        </div>
    )
}

export default LoginPage