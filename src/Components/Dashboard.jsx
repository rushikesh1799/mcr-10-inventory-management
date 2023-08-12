import React, { useContext } from "react";

import "./styles.css";
import Navigation from "./Navigation";
import { DataContext } from "../Contexts/DataContext";

const Dashboard = () => {
    const { totalStockProducts, totalDelivered, lowStockItems } =
        useContext(DataContext);

    return (
        <div className="dashboard_wrapper">
            <Navigation />
            <div className="dept_cards_container">
                <div className="dept">
                    <p>{totalStockProducts}</p>
                    <p>Total Stock</p>
                </div>
                <div className="dept">
                    <p>{totalDelivered}</p>
                    <p>Total Delivered</p>
                </div>
                <div className="dept">
                    <p>{lowStockItems.length}</p>
                    <p>Low Stock Items</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
