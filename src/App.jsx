import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './auth/screens/login'
import Discover from './screens/discover/discover';
import SignIn from './auth/screens/signin';
import AuthProvider from './contexts/authcontext';
import Profilepage from './screens/profile/profile';
import FavoritesPage from './screens/favorites/favorites';
import PrivateRoute from './contexts/privateRoute/PrivateRoute'

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignIn />} />

          {/* Protected routes */}
          <Route 
            path='/discover' 
            element={
              <PrivateRoute>
                <Discover />
              </PrivateRoute>
            } 
          />
          <Route 
            path='/profile' 
            element={
              <PrivateRoute>
                <Profilepage />
              </PrivateRoute>
            } 
          />
          <Route 
            path='/favorites' 
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;