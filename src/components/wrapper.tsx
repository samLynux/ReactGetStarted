import axios from "axios";
import React, { Dispatch, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { User } from "../models/user";
import { setUser } from "../redux/actions/setUserAction";
import Menu from "./Menu";
import Nav from "./Nav";


const Wrapper = (props: any) => {
    const [redirect, setRedirect] = useState(false);


    useEffect(() =>{
       ( async () =>{
            try{
                const {data} = await axios.get('user');

                props.setUser(new User(
                    data.id,
                    data.firstname,
                    data.lastname,
                    data.email,
                    data.role
                ));
            }catch(e){
                setRedirect(true);
            }
        })();

    }, []);

    if(redirect){
        return <Redirect to={'/login'}/>;
    }
    
        return ( 
        <>
            <Nav/>

            <div className="container-fluid">
            <div className="row">
                <Menu/>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    {props.children}
                
                </main>
            </div>
            </div>
        </>);
    
}

const maspStateToProps = (state: {user: User}) => {
    return {
        user: state.user
    };
}

const maspDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setUser: (user: User) => dispatch(setUser(user))
    };
}

export default connect(maspStateToProps, maspDispatchToProps) (Wrapper);