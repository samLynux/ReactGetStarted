import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Nav/>

      <div className="container-fluid">
        <div className="row">
          <Menu/>
            <Dashboard/>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          </main>
        </div>
      </div>

    </div>
  );
}

export default App;
