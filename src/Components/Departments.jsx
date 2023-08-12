import React from "react";
import Navigation from "./Navigation";

import "./styles.css";

const Departments = () => {
    return (
        <div className="departments_wrapper">
            <Navigation />
            <div className="dept_cards_container">
                <div className="dept">Kitchen</div>
                <div className="dept">Clothing</div>
                <div className="dept">Toys</div>
            </div>
        </div>
    );
};

export default Departments;
