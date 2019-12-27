import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand">Homework-65</h1>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pages/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pages/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pages/contacts">Contacts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pages/division">Divisions</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/edit">admin</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;