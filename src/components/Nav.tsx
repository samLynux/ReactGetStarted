import axios from "axios";
import React  from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { User } from "../models/user";

const Nav = (props: { user: User}) =>{

    
    const logOut = async() => {
        await axios.post('logout', {});
    }

    return ( 
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
            <ul className="my-2 my-md-0 mr-md-3">
                <Link className="p-2 text-white text-decoration-none" to={'/profile'} >
                    {props.user.name}
                </Link>
                <Link className="p-2 text-white text-decoration-none" to={'/login'}
                   onClick={logOut}  >Sign Out</Link>
            </ul>
        </nav>);
    
}

const maspStateToProps = (state: {user: User}) => {
    return {
        user: state.user
    };
}

export default connect(maspStateToProps) (Nav);