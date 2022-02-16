import axios from "axios";
import React, { useEffect, useState } from "react";

const Nav = () =>{

    const [user, setUser]= useState({
        first_name: 'x'
    });


    useEffect(() =>{
       ( async () =>{
            const {data} = await axios.get('http://localhost:8000/api/user',{withCredentials: true});

            setUser(data);
        })();

    }, []);
        
    return ( 
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
            <ul className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-white text-decoration-none" href="#" >{user?.first_name}</a>
                <a className="p-2 text-white text-decoration-none"  href="#" >Sign Out</a>
            </ul>
        </nav>);
    
}

export default Nav;