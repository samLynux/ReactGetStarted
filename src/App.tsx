import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Dashboard from './pages/dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Users from './pages/Users';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>

        <div className="container-fluid">
          <div className="row">
            <Menu/>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            
              <Route path='/' exact component={Dashboard}/>
              <Route path='/users' component={Users}/>
              
            </main>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
