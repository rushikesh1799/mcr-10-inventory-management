import React, { useContext } from "react";

import "./styles.css";
import { NavLink } from "react-router-dom";
import { DataContext } from "../Contexts/DataContext";

const Navigation = () => {
    const { setFilters } = useContext(DataContext);

    return (
        <nav className="navigation_wrapper">
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/departments">Departments</NavLink>
            <NavLink
                to="/products"
                onClick={() =>
                    setFilters((prev) => ({
                        ...prev,
                        dept_type: "all",
                    }))
                }
            >
                Products
            </NavLink>
        </nav>
    );
};

export default Navigation;
