import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LogIn, UsersList, User } from './pages';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" exact element={<LogIn />} />
        <Route path="/" exact element={<ProtectedRoute component={UsersList} />} />
        <Route path="/:userId" element={<ProtectedRoute component={User} />} />
      </Routes>
    </div>
  );
}

export default App;