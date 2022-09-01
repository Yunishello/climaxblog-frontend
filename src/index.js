import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/login'
import Signup from './pages/signup';
import Profile from './pages/profile';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Logout from './pages/logout';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='register' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='profile' element={<Profile />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='/logout' element={<Logout />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


reportWebVitals();
