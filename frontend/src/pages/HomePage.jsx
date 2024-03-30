import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext';
import FileUpload from '../components/FileUpload';

const HomePage = () => {

    const { authToken, logout } = useContext(AuthContext);
    // const [notes, setNotes] = useState([]);
    const data = [];

    // useEffect(() => {
    //     getNotes();
    // },[])

    // const getNotes = async() => {
    //     const response = await fetch('http://127.0.0.1:8000/api/notes/', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': "Bearer " + String(authToken.access)
    //         },
    //     })
    //     const data = await response.json();
    //     if (response.status === 200) {
    //         setNotes(data);
    //     }else if(response.statusText === 'Unauthorized') {
    //         logout();
    //     }
    // }

    return (
        <div>
            hello
            <FileUpload/>
        </div>
    )
}

export default HomePage