import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {

    const {loginUser} = useContext(AuthContext);

    return (
        <div>
            <form onSubmit={loginUser} method="POST">
                <input type='text' name="username" placeholder='Enter Username' autoComplete='off'/>
                <input type='password' name="password" placeholder='Enter Username' autoComplete='off' />
                <input type='submit'/>
            </form>
        </div>
    )
}

export default LoginPage