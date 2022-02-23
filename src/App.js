import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components';
import { LogIn, UsersList, User } from './pages';
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