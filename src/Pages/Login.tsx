import './Login.css'
import React, {SyntheticEvent, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [redirect, setRedirect] = useState(false);

    const [errorText, setErrorText] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const data = {
            "email": email,
            "password": pass
        };

        try {
            const res = await axios.post('http://localhost:3000/auth/login', data, {withCredentials: true});

            if (res.status == 201) {
                setRedirect(true);
            }
            if (res.status != 201) {
                setErrorText("Napaka v podatkih");
            }
        } catch (e) {

        }

    }
    if (redirect) {
        return <Navigate to='/'/>;
    }

    return (
        <>
            <div className="login-popup">
                <form className="login-form" onSubmit={submit}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="email"
                            id="username"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                    <div>
                        <p>Don't have an account yet? <a href="/register">Register now</a></p>
                        <p className="error">{errorText}</p>
                    </div>
                </form>
            </div>
        </>
    );
}


export default Login;
