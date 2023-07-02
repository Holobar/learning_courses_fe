import './Login.css'
import React, {SyntheticEvent, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');

    const [errorText, setErrorText] = useState('');

    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        if (pass1 != pass2) {
            setErrorText('Gesli se ne ujemata');
        }
        if (pass1 == pass2) {
            const data = {
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "password": pass1
            };

            const res = await axios.post('http://localhost:3000/users', data);

            if (res.status != 201) {
                setErrorText('Napaka v registracijskih podatkih');
                console.log(res.data);
            }

            if (res.status == 201) {
                //redirect na login
                setRedirect(true);
            }
        }
    }

    if (redirect) {
        return <Navigate to='/login'/>;
    }

    return (
        <>
            <div className="login-popup">
                <form className="login-form" onSubmit={submit}>
                    <h2>Register</h2>
                    <div className="form-group">
                        <label htmlFor="username">First name:</label>
                        <input
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Last name:</label>
                        <input
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Email:</label>
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
                            onChange={(e) => setPass1(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Repeat password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPass2(e.target.value)}
                        />
                    </div>
                    <button type="submit">Register</button>
                    <div>
                        <p>Already having account? <a href="/login">Log in</a></p>
                        <p className="error">{errorText}</p>
                    </div>

                </form>
            </div>
        </>
    );
}


export default Register;
