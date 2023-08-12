import React, { useContext } from "react";
import Navigation from "./Navigation";

import "./styles.css";
import { useNavigate } from "react-router";
import { DataContext } from "../Contexts/DataContext";

const Departments = () => {
    const { setFilters } = useContext(DataContext);
    const navigate = useNavigate();

    return (
        <div className="departments_wrapper">
            <Navigation />
            <div className="dept_cards_container">
                <div
                    className="dept"
                    onClick={() => {
                        navigate("/products");
                        setFilters((prev) => ({
                            ...prev,
                            dept_type: "kitchen",
                        }));
                    }}
                >
                    Kitchen
                </div>
                <div
                    className="dept"
                    onClick={() => {
                        navigate("/products");
                        setFilters((prev) => ({
                            ...prev,
                            dept_type: "clothing",
                        }));
                    }}
                >
                    Clothing
                </div>
                <div
                    className="dept"
                    onClick={() => {
                        navigate("/products");
                        setFilters((prev) => ({
                            ...prev,
                            dept_type: "toys",
                        }));
                    }}
                >
                    Toys
                </div>
            </div>
        </div>
    );
};

export default Departments;
