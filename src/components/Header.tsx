import {useEffect, useState} from "react";
import axios from "axios";

const Header = () => {
    const [logOnText, setLogOnText] = useState("Login");

    const checkIfLogOn = async () => {
        try {
            const res = await axios.get("http://localhost:3000/auth/profile", {
                withCredentials: true,
            });
            setLogOnText(res.data.email);
        } catch (e) {
            setLogOnText("Login");
        }
    };

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:3000/auth/logout", null, {
                withCredentials: true,
            });
            setLogOnText("Login");
        } catch (e) {
            console.error("Logout failed:", e);
        }
    };

    useEffect(() => {
        checkIfLogOn();
    }, []);

    return (
        <div className="navigation">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li className="login-tab">
                    <a href="/Login" onClick={logOnText === "Login" ? undefined : handleLogout}>
                        {logOnText} {logOnText !== "Login" && "(Logout)"}
                    </a>

                </li>
            </ul>
        </div>
    );
};

export default Header;
