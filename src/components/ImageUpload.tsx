import axios from "axios";
import React,  { Component } from "react";
import {  NavLink } from "react-router-dom";


const ImageUpload = (props: {uploaded: (url: string) => void}) =>{
    
    const upload = async (files: FileList | null) =>{
        if(files == null) return;

        const formData = new FormData();
        formData.append('image', files[0]);

        const {data} = await axios.post('upload',formData)

        props.uploaded(data.url);
    }
    return ( 
        <label className="btn btn-primary">   
            <div className="input-group">
                Upload <input type="file" hidden onChange={e => upload(e.target.files)}/>
            </div>
        </label>);
    
}

export default ImageUpload;