import React from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import './LogIn.css';

function LogIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [checked, setChecked] = React.useState(true);

    const [values, setValues] = React.useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN', data: values });
        setValues({
            username: '',
            password: '',
        });
        fetch(`${process.env.REACT_APP_RANDOM_USER_API_URL}/?results=10`)
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'GET_RANDOM_USERS', data: data.results });
                navigate('/');
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="app_login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Email Address</label>
                    <input
                        autoComplete="off"
                        type="email"
                        name="username"
                        onChange={handleChange}
                        value={values.username || ""}
                        required
                    />
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <input
                        autoComplete="off"
                        type={checked ? "password" : "text"}
                        name="password"
                        onChange={handleChange}
                        value={values.password || ""}
                        required
                    />
                    <div className="show_password">
                        <label><input type="checkbox" onChange={() => setChecked(!checked)} />Show Password</label>
                    </div>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LogIn;