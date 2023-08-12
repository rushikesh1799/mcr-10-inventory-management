import React, { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import NewProduct from "./NewProduct";
import { useNavigate } from "react-router";

const Filters = () => {
    const { filters, setFilters } = useContext(DataContext);

    const navigate = useNavigate();

    return (
        <div className="filters_wrapper">
            <h1>Products</h1>
            <div>
                <select
                    name="depts"
                    id="depts"
                    className="dropdowns"
                    value={filters.dept_type}
                    onChange={(e) =>
                        setFilters((prev) => ({
                            ...prev,
                            dept_type: e.target.value,
                        }))
                    }
                >
                    <option value="all">All Departments</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="clothing">Clothing</option>
                    <option value="toys">Toys</option>
                </select>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="lowStockItems"
                    name="lowStockItems"
                    value={filters.low_stock_items}
                    checked={filters.low_stock_items}
                    onChange={() =>
                        setFilters((prev) => ({
                            ...prev,
                            low_stock_items: !filters.low_stock_items,
                        }))
                    }
                />
                <label htmlFor="lowStockItems">Low Stock Items</label>
            </div>
            <div>
                <select
                    name="depts"
                    id="depts"
                    className="dropdowns"
                    value={filters.sortBy}
                    onChange={(e) =>
                        setFilters((prev) => ({
                            ...prev,
                            sortBy: e.target.value,
                        }))
                    }
                >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="stock">Stock</option>
                </select>
            </div>
            <button onClick={() => navigate("/add-new-product")}>NEW</button>
        </div>
    );
};

export default Filters;
