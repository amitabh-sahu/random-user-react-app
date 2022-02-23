import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import PageWrap from '../../wrapper';
import './UsersList.css';

function UsersList() {
    const randomUsers = useSelector((state) => state.randomUsers);

    return (
        <div className="app_userslist">
            <h1>Users</h1>
            {randomUsers.map((randomUser, index) => (
                <Link to={`/${randomUser.login.uuid}`} key={randomUser.login.uuid} style={{ textDecoration: 'none' }}>
                    <p className='app_userslist-users'>{randomUser.name.title} {randomUser.name.first} {randomUser.name.last}</p>
                </Link>
            ))}
        </div>
    )
}

export default PageWrap(UsersList, 'app_userslist');