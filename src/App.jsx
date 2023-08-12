import { useContext, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import "./App.css";
import { DataContext } from "./Contexts/DataContext";
import Dashboard from "./Components/Dashboard";
import Departments from "./Components/Departments";
import ProductsListing from "./Components/ProductsListing";
import ProductDetails from "./Components/ProductDetails";
import Filters from "./Components/Filters";
import NewProduct from "./Components/NewProduct";

function App() {
    const { count } = useContext(DataContext);

    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/departments" element={<Departments />}></Route>
                <Route path="/products" element={<ProductsListing />}></Route>
                <Route path="/add-new-product" element={<NewProduct />}></Route>
                <Route
                    path="/products/:productID"
                    element={<ProductDetails />}
                ></Route>
            </Routes>
        </>
    );
}

export default App;
