import React, { Dispatch, SyntheticEvent, useEffect, useState } from "react";
import * as c3 from 'c3';
import Wrapper from "../components/wrapper";
import axios from "axios";
import { User } from "../models/user";
import { connect } from "react-redux";
import { setUser } from "../redux/actions/setUserAction";


const Profile = (props: {user: User, setUser: (user:User) => void}, ) => {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordConfirm,setPasswordConfirm] = useState('')

    useEffect(() => {
        
        setFirstName(props.user.firstname);
        setLastName(props.user.lastname);
        setEmail(props.user.email);
            
    }, [props.user]);

    const infoSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const {data} = await axios.put(`users/info`, {
            firstname: firstName,
            lastname: lastName,
            email,
        });
        
        props.setUser(new User(
            data.id,
            data.firstname,
            data.lastname,
            data.email,
            data.role
        ));
    }

    const passwordSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`users/password`, {
            password,
            password_confirm: passwordConfirm
        });

        //setRedirect(true);
    }

    return (
        <Wrapper>
            <h3>Account Information</h3>
            <form onSubmit={infoSubmit}>
                <div className="mb-3">
                    <label>First Name</label>
                    <input className="form-control" 
                        defaultValue={firstName}
                        onChange={e =>  setFirstName(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label>Last Name</label>
                    <input className="form-control" 
                        defaultValue={lastName}
                        onChange={e =>  setLastName(e.target.value)}/>
                </div>
                    
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" 
                        defaultValue={email}
                        onChange={e =>  setEmail(e.target.value)}/>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Save</button>
            </form>
            <h3>Change Password</h3>
            <form onSubmit={passwordSubmit}>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" 
                        onChange={e =>  setPassword(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label>Password Confirm</label>
                    <input type="password" className="form-control" 
                        onChange={e =>  setPasswordConfirm(e.target.value)}/>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Save</button>
            </form>
        </Wrapper>
    )
    
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

export default connect(maspStateToProps, maspDispatchToProps) (Profile)