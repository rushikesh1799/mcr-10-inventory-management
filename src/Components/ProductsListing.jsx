import React, { useContext, useEffect } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { DataContext } from "../Contexts/DataContext";
import Navigation from "./Navigation";

import "./styles.css";
import Filters from "./Filters";
import { useNavigate } from "react-router";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const ProductsListing = () => {
    const { productsData, filters } = useContext(DataContext);

    const navigate = useNavigate();

    const productsDataByDept =
        filters.dept_type === "all"
            ? productsData
            : productsData.filter(
                  (product) =>
                      product.department.toLowerCase() ===
                      filters.dept_type.toLowerCase()
              );

    const productsDataBySort =
        filters.sortBy === "name"
            ? [...productsDataByDept].sort((a, b) =>
                  a.name.localeCompare(b.name)
              )
            : filters.sortBy === "price"
            ? [...productsDataByDept].sort((a, b) => a.price - b.price)
            : filters.sortBy === "stock"
            ? [...productsDataByDept].sort((a, b) => a.stock - b.stock)
            : productsDataByDept;

    const productsDataByCheckBox =
        filters.low_stock_items === true
            ? productsDataBySort.filter((product) => product.stock <= 10)
            : productsDataBySort;

    // useEffect(() => {
    //     console.log("productsDataByCheckBox", productsDataByCheckBox);
    // }, [productsDataByCheckBox]);

    return (
        <div className="departments_wrapper">
            <Navigation />
            <div className="main_container">
                <Filters />
                <TableContainer component={Paper}>
                    <Table sx={{ Width: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">
                                    Image
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    Name
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    Description
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    Price
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    Stock
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    Supplier
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productsDataByCheckBox.length === 0 ? (
                                <div>No Items to show</div>
                            ) : (
                                productsDataByCheckBox.map((product) => (
                                    <StyledTableRow key={product.id}>
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                        >
                                            <img
                                                className="product_img"
                                                src={product.imageUrl}
                                                alt={product.name}
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell
                                            align="left"
                                            onClick={() =>
                                                navigate(
                                                    `/products/${product.id}`
                                                )
                                            }
                                        >
                                            {product.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {product.description}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {product.price}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {product.stock}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            {product.supplier}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default ProductsListing;
