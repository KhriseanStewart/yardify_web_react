import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './auth/screens/login'
import Discover from './screens/discover/discover';
import SignIn from './auth/screens/signin';
import AuthProvider from './contexts/authcontext';

function App() {

  return (
        <AuthProvider>
    <Router>
      <Routes>

        <Route path='/' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignIn/>}></Route>
        <Route path='/discover' element={<Discover></Discover>}></Route>
      </Routes>
    </Router>
        </AuthProvider>
  )
}

export default App
