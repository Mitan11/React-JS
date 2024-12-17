import React, { useState, useEffect } from "react";
import axios from "axios";
import { TableVirtuoso } from "react-virtuoso";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";
import SearchBar from "./Searchbar";

const columns = [
  { width: 100, label: "Product ID", dataKey: "id" },
  { width: 200, label: "Title", dataKey: "title" },
  { width: 100, label: "Price", dataKey: "price", numeric: true },
  { width: 150, label: "Category", dataKey: "category" },
  { width: 150, label: "Availability", dataKey: "availabilityStatus" },
  { width: 100, label: "Rating", dataKey: "rating", numeric: true },
];

export default function ProductTable() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterQuery, setFilterQuery] = useState("");
  const [sortState, setSortState] = useState({ key: null, direction: "asc" });

  // Fetch products using Axios
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProductList(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  // Sorting functionality
  const handleSort = (key) => {
    let direction = "asc";
    if (sortState.key === key && sortState.direction === "asc") {
      direction = "desc";
    }
    setSortState({ key, direction });
  };

  const sortedList = [...productList].sort((a, b) => {
    if (!sortState.key) return 0;

    const valueA = a[sortState.key];
    const valueB = b[sortState.key];

    if (typeof valueA === "string" && typeof valueB === "string") {
      return sortState.direction === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }
    return sortState.direction === "asc" ? valueA - valueB : valueB - valueA;
  });

  // Filter products based on search term
  const displayedProducts = sortedList.filter((product) =>
    product.title.toLowerCase().includes(filterQuery.toLowerCase())
  );

  // Virtuoso Table Components
  const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
      <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
      <Table {...props} sx={{ borderCollapse: "separate", tableLayout: "fixed" }} />
    ),
    TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
    TableRow,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
  };

  // Fixed Header Content with Sorting
  const fixedHeaderContent = () => (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric ? "right" : "left"}
          style={{ width: column.width }}
          sx={{ backgroundColor: "background.paper" }}
        >
          <TableSortLabel
            active={true}
            direction={sortState.key === column.dataKey ? sortState.direction : "asc"}
            onClick={() => handleSort(column.dataKey)}
          >
            {column.label}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  );

  // Row Content
  const rowContent = (_index, row) => (
    <>
      {columns.map((column) => (
        <TableCell key={column.dataKey} align={column.numeric ? "right" : "left"}>
          {column.dataKey === "thumbnail" ? (
            <img
              src={row[column.dataKey]}
              alt={row.title}
              style={{ width: "50px", height: "auto" }}
            />
          ) : (
            row[column.dataKey]
          )}
        </TableCell>
      ))}
    </>
  );

  if (loading) return <div>Loading products...</div>;

  return (
    <Paper style={{ height: 500, width: "100%", marginTop: "1rem" }}>
      <SearchBar searchTerm={filterQuery} setSearchTerm={setFilterQuery} />
      <TableVirtuoso
        data={displayedProducts}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
