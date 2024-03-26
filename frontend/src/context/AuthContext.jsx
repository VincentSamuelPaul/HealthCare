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

    let updateToken = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({'refresh':authToken?.refresh})
        });
        let data = await response.json()

        if (response.status === 200) {
            setAuthToken(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem('authTokens', JSON.stringify(data));
        } else {
            logout();
        };

        if (loading) {
            setLoading(false);
        }
    }


    let contextData = {
        user: user,
        authToken: authToken,
        loginUser: loginUser,
        logout: logout,
    }

    useEffect(() => {

        if(loading) {
            updateToken();
        }

        let fourMinutes = 1000 * 60 * 4;

        let interval = setInterval(() => {
            if(authToken) {
                updateToken();
            }
        }, fourMinutes)
        return () => clearInterval(interval);
    }, [authToken, loading]);
    
    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}