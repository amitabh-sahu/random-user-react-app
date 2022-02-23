import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import PageWrap from '../../wrapper';
import './User.css';

function User() {
    const randomUsers = useSelector((state) => state.randomUsers);
    const { userId } = useParams();

    const randomUserData = randomUsers.filter((randomUser) => randomUser.login.uuid === userId);
    const { picture, name, gender, location, dob, email, phone } = randomUserData[0];
    const fullName = `${name.title} ${name.first} ${name.last}`;

    return (
        <div className="app_user">
            <h1>Details</h1>
            <div className="app_user_details">
                <img src={picture.large} alt={fullName} />
                <div><span>Name -</span><p>{fullName}</p></div>
                <div><span>Gender -</span><p style={{ textTransform: 'capitalize' }}>{gender}</p></div>
                <div>
                    <span>Address -</span>
                    <address>
                        {location.street.number}, {location.street.name}<br />
                        {location.city}, {location.state}<br />
                        {location.country}, postal code: {location.postcode}<br />
                    </address>
                </div>
                <div><span>DOB -</span><p>{dob.date.split('T')[0]}</p></div>
                <div><span>Email -</span><p>{email}</p></div>
                <div><span>Phone -</span><p>{phone}</p></div>
            </div>
        </div>
    )
}

export default PageWrap(User, 'app_user');