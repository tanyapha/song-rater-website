import React, { useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';

function App(){
    const [token, setToken] = useState();

    if(!token) {
      return <Login setToken={setToken} />
    }
    return (
        <div className = 'wrapper'>
            <h1> Song Rater App </h1>
            <BrowserRouter>
                <Routes>
                    <Route path='/dashboard' element = { <Dashboard />}/>
                    <Route path='/login' element = { <Login />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;