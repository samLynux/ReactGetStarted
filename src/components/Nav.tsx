import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../models/user";

const Nav = () =>{

    const [user, setUser]= useState(new User());


    useEffect(() =>{
       ( async () =>{
            const {data} = await axios.get('user');

            setUser(new User(
                data.id,
                data.firstname,
                data.lastname,
                data.email,
            ));
        })();

    }, []);
        
    const logOut = async() => {
        await axios.post('logout', {});
    }

    return ( 
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
            <ul className="my-2 my-md-0 mr-md-3">
                <Link className="p-2 text-white text-decoration-none" to={'/profile'} >
                    {user.name}
                </Link>
                <Link className="p-2 text-white text-decoration-none" to={'/login'}
                   onClick={logOut}  >Sign Out</Link>
            </ul>
        </nav>);
    
}

export default Nav;