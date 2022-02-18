import React, { SyntheticEvent, useEffect, useState } from "react";
import * as c3 from 'c3';
import Wrapper from "../components/wrapper";
import axios from "axios";


const Profile = () => {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [passwordConfirm,setPasswordConfirm] = useState('')

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('user');

                setFirstName(data.firstname)
                setLastName(data.lastname)
                setEmail(data.email)
            }
        )()
    }, [])

    const infoSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.put(`users/info`, {
            firstname: firstName,
            lastname: lastName,
            email,
        });
        console.log();
        
        //setRedirect(true);
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

export default Profile