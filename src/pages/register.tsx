import React,{ Component, SyntheticEvent } from "react";
import '../Login.css';

class Register extends Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm = '';

    submit = (e: SyntheticEvent) =>
    {
        e.preventDefault();
        console.log({
            firstname: this.first_name,
            lastname: this.last_name,
            email: this.email,
            pass: this.password,
            pass_con: this.password_confirm,
        });
        
    }


    render(){
        return (
            <main className="form-signin">
            <form onSubmit={this.submit}>
              <h1 className="h3 mb-3 fw-normal">Please Register</h1>
          
                <input className="form-control" placeholder="First Name"
                    onChange={e =>  this.first_name = e.target.value}/>

                <input className="form-control" placeholder="Last Name"
                    onChange={e =>  this.last_name = e.target.value}/>

                <input type="email" className="form-control" placeholder="Email"
                    onChange={e =>  this.email = e.target.value}/>
                
              
                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e =>  this.password = e.target.value}/>
                <input type="password" className="form-control" placeholder="Password Confirm" required
                    onChange={e =>  this.password_confirm = e.target.value}/>
                
           
              <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
          </main>
        );
    }
}

export default Register;