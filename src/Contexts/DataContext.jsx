import { createContext, useEffect, useState } from "react";
import { inventoryData } from "../DB/productsData";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const storedState = localStorage.getItem("allProducts");
    const [filters, setFilters] = useState({
        dept_type: "all",
        low_stock_items: false,
        sortBy: "name",
    });

    const [productsData, setProductsData] = useState(
        storedState ? JSON.parse(storedState) : inventoryData
    );

    useEffect(() => {
        if (storedState) {
            setProductsData(JSON.parse(storedState));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("allProducts", JSON.stringify(productsData));
    }, [productsData]);

    const totalStockProducts = productsData.reduce(
        (acc, curr) => Number(curr.stock) + acc,
        0
    );
    const totalDelivered = productsData.reduce(
        (acc, curr) => Number(curr.delivered) + acc,
        0
    );
    const lowStockItems = productsData.reduce(
        (acc, curr) => (curr.stock <= 10 ? [...acc, curr] : acc),
        []
    );

    // console.log(lowStockItems);

    // useEffect(() => {
    //     console.log("low_stock_items", filters.low_stock_items);
    //     // console.log("sortBy", filters.sortBy);
    // }, [filters]);

    return (
        <DataContext.Provider
            value={{
                productsData,
                totalStockProducts,
                totalDelivered,
                lowStockItems,
                filters,
                setProductsData,
                setFilters,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
