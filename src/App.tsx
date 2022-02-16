import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
<<<<<<< HEAD
import Dashboard from './pages/Dashboard';
=======
import Dashboard from './pages/dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Users from './pages/Users';
>>>>>>> 2cd9c668670b21b691f7f4a143b512dd60aff42e


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Nav/>

      <div className="container-fluid">
        <div className="row">
          <Menu/>
            <Dashboard/>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          </main>
=======
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
>>>>>>> 2cd9c668670b21b691f7f4a143b512dd60aff42e
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
