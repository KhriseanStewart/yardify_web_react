import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './auth/screens/login'
import Discover from './screens/discover/discover';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LogIn></LogIn>}></Route>
        <Route path='/discover' element={<Discover></Discover>}></Route>

      </Routes>
    </Router>
  )
}

export default App
