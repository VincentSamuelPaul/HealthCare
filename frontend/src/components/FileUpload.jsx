import React, { useState } from 'react';
import '../styles/FileUpload.css';

const FileUpload = () => {

    // const [file, setFile] = useState(null);

    const fileInput = document.getElementById("file");

    const uploadFile = async() => {
        const file = fileInput.files[0];
        console.log(file);

        const formData = new FormData()
        formData.append("fileName" ,file);

        const response = await fetch("http://127.0.0.1:8000/fileupload/", {
            method: 'POST',
            body: formData,
        })
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className='fileupload'>
            <input type='file' id='file' accept="application/pdf,application/vnd.ms-excel"/>
            <button onClick={uploadFile}>Submit</button>
        </div>
    )
}

export default FileUpload