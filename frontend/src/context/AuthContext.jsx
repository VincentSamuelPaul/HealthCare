import { createContext, useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    // localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null
    const [user, setUser] = useState(() => localStorage.getItem('authToken') ? jwtDecode(localStorage.getItem('authToken')).username : null);
    const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null);
    const [loading, setLoading] = useState(true);

    const loginUser = async(e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})
        });
        let data = await response.json();
        console.log(data);
        if (response.status === 200) {
            setAuthToken(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem('authToken', JSON.stringify(data));
            navigate('/');
        } else {
            alert("Something went wrong");
        }
    }

    const logout = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('authToken');
        navigate('/login');
    }

    // const updateToken = async() => {
    //     console.log("Update token");
    //     const response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({'refresh': authToken?.refesh})
    //     });
    //     let data = await response.json();
    //     if (response.status === 200) {
    //         setAuthToken(data);
    //         setUser(jwtDecode(data.access));
    //         localStorage.setItem('authToken', JSON.stringify(data));
    //         navigate('/');
    //     } else {
    //         logout();
    //     }
    // }


    let contextData = {
        user: user,
        loginUser: loginUser,
        logout: logout,
    }

    // const fourMinutes = 1000 * 60 * 4
    // useEffect(() => {

    //     if (loading) {
    //         updateToken();
    //     };

    //     setInterval(() => {
    //         if (authToken) {
    //             updateToken();
    //         }
    //     },2000);

    //     return  () => clearInterval();
    // }, [authToken, loading]);
    
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}