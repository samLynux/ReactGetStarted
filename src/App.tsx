import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './pages/users/Users';
import Register from './pages/register';
import Login from './pages/Login';
import UserCreate from './pages/users/UserCreate';
import UserEdit from './pages/users/UserEdit';
import Roles from './pages/roles/Roles';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Dashboard}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        
        <Route path='/users' exact component={Users}/>
        <Route path='/users/create' component={UserCreate}/>
        <Route path='/users/:id/edit' component={UserEdit}/>

        <Route path='/roles' exact component={Roles}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
