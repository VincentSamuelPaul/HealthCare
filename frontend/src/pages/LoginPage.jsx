import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'
import '../styles/main.css';
import LoginSignup from '../components/LoginSignup';

const LoginPage = () => {

    const {loginUser} = useContext(AuthContext);
    const [inUp, setInUp] = useState(0);

    return (
        // <div className='container'>
        //     <h2>Login Page</h2>
        //     <form id='loginForm' onSubmit={loginUser} method='POST'>
        //         <label form='username'>Username:</label>
        //         <input type='text' id='username' required autoComplete='off'/>
        //         <label form='password'>Password:</label>
        //         <input type="password" id="password" name="password" required autoComplete='off'></input>
        //         <button type="submit">Login</button>
        //     </form>
        // </div>
        <div className='container'>
            { inUp ? 
            <div className='inup'>
            <LoginSignup inUp={inUp} setInUp={setInUp} />
                <form id='loginForm' onSubmit={loginUser} method='POST'>
                    <label form='username'>Username:</label>
                    <input type='text' id='username' required autoComplete='off'/>
                    <label form='password'>Password:</label>
                    <input type="password" id="password" name="password" required autoComplete='off'></input>
                    <label form='password'>Email:</label>
                    <input type="email" id="email" name="email" required autoComplete='off'></input>
                    { !inUp ? <button type='submit'>Login</button> : <button type='submit'>SignUp</button> }
                </form>
            </div> :
            <div className='inup'>
            <LoginSignup inUp={inUp} setInUp={setInUp}/>
                <form id='loginForm' onSubmit={loginUser} method='POST'>
                    <label form='username'>Username:</label>
                    <input type='text' id='username' required autoComplete='off'/>
                    <label form='password'>Password:</label>
                    <input type="password" id="password" name="password" required autoComplete='off'></input>
                    
                    {/* <button type="submit">{inUp ? <>SignUp</> : <>Login</>}</button> */}
                    { inUp ? <button type='submit'>SignUp</button> : <button type='submit'>Login</button> }
                </form>
            </div>
            }
        </div>
    )
}

export default LoginPage