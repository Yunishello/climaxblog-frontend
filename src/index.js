import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import Login from './pages/login';
import Single from './pages/singleBlog';
import Profile from './pages/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Logout from './pages/logout';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singleBlog" element={<Single />} />
      <Route path='/login' element={<Login />} />
      <Route path='login' element={<Login />} />
      <Route path='profile' element={<Profile />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='/logout' element={<Logout />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);