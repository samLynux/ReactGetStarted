import React from 'react';
import './App.css';
import Dashboard from './pages/DashboardView';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './pages/users/Users';
import Register from './pages/register';
import Login from './pages/Login';
import UserCreate from './pages/users/UserCreate';
import UserEdit from './pages/users/UserEdit';
import Roles from './pages/roles/Roles';
import RoleCreate from './pages/roles/RoleCreate';
import RoleEdit from './pages/roles/RoleEdit';
import Products from './pages/products/products';
import ProductCreate from './pages/products/ProductCreate';
import ProductEdit from './pages/products/ProductEdit';
import Orders from './pages/orders/Orders';


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
        <Route path='/roles/create' exact component={RoleCreate}/>
        <Route path='/roles/:id/edit' exact component={RoleEdit}/>

        <Route path='/products' exact component={Products}/>
        <Route path='/products/create' exact component={ProductCreate}/>
        <Route path='/products/:id/edit' exact component={ProductEdit}/>

        <Route path='/orders' exact component={Orders}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
