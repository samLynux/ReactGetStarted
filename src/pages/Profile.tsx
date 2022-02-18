import React, { useEffect, useState } from "react";
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
            }
        )()
    }, [])


    return (
        <Wrapper>
            <h3>Account Information</h3>
            <form >
                <div className="mb-3">
                    <label>First Name</label>
                    <input className="form-control" 
                        onChange={e =>  setEmail(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label>Last Name</label>
                    <input className="form-control" 
                        onChange={e =>  setEmail(e.target.value)}/>
                </div>
                    
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email"required
                        onChange={e =>  setEmail(e.target.value)}/>
                </div>


                
            
                <button className="w-100 btn btn-lg btn-primary" type="submit">Save</button>
            </form>
        </Wrapper>
    )
    
}

export default Profile