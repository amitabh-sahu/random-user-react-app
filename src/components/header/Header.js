import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  return (
    <div className="app_header">
      <Link to='/' style={{ fontSize: '1.5rem' }}>Home</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Header;