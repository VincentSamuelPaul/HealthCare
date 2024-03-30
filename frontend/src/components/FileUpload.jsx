import React, { useState } from 'react';
import '../styles/FileUpload.css';

const FileUpload = () => {

    const [message, setMessage] = useState('')

    const uploadFile = async() => {
        const fileInput = document.getElementById("file");
        const file = fileInput.files[0];

        const formData = new FormData()
        formData.append("fileName" ,file);

        const response = await fetch("http://127.0.0.1:8000/fileupload/", {
            method: 'POST',
            body: formData,
        })
        const data = await response.json();
        setMessage(data);
    }

    return (
        <div className='fileupload'>
            <input type='file' id='file' accept="application/pdf,application/vnd.ms-excel"/>
            <button onClick={uploadFile}>Submit</button>
            <h3>{message}</h3>
        </div>
    )
}

export default FileUpload