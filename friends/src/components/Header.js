import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const signOut = e => {
        window.localStorage.removeItem('token');
    }

    return (
        <div className="nav-bar">
            <h1 className="friends-title">
                F 
                <span role='img' aria-label='red circle'> 🔴 </span>
                R 
                <span role='img' aria-label='yellow circle'> 🟡 </span>
                I 
                <span role='img' aria-label='blue circle'> 🔵 </span>
                E 
                <span role='img' aria-label='red circle'> 🔴 </span>
                N 
                <span role='img' aria-label='yellow circle'> 🟡 </span>
                D 
                <span role='img' aria-label='blue circle'> 🔵 </span>
                S
            </h1>
            <ul className="nav-links">
                <li className="nav-li">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-li">
                    <Link to="/people" className="nav-link">Friends</Link>
                </li>
                <li className="nav-li">
                    <Link to="/login" onClick={signOut} className="nav-link">Sign Out</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;