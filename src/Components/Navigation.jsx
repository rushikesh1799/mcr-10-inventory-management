import React from "react";

import "./styles.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navigation_wrapper">
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/departments">Departments</NavLink>
            <NavLink to="/products">Products</NavLink>
        </nav>
    );
};

export default Navigation;
