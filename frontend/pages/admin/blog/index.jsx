import React, { useEffect, useState } from "react";
import { AdminLayout } from "@/component/admin/AdminLayout";
import {
  Checkbox,
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Card,
  CardHeader,
  TextField,
  Button,
  CardContent,
} from "@mui/material";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { DeleteFilled, SearchOutlined, EditFilled } from "@ant-design/icons";
import { useRouter } from "next/router";
import axios from "axios";
import { handleApiError } from "@/component/functions";

// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { visuallyHidden } from '@mui/utils';

export async function getServerSideProps(context) {
  try {
    const res = await axios.get("http://localhost:3000/api/blog");
    const data =  res.data;
    return {
      props: {
        blog: data,
      },
    };
  } catch (error) {
    return handleApiError(error);
  }
}

// function createData(id, name, calories, fat, carbs, protein) {
//   return {
//     id,
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }


// const rows = [
//   createData(1, "Cupcake", 305, 3.7, 67, 4.3),
//   createData(2, "Donut", 452, 25.0, 51, 4.9),
//   createData(3, "Eclair", 262, 16.0, 24, 6.0),
//   createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
//   createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
//   createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
//   createData(9, "KitKat", 518, 26.0, 65, 7.0),
//   createData(10, "Lollipop", 392, 0.2, 98, 0.0),
//   createData(11, "Marshmallow", 318, 0, 81, 2.0),
//   createData(12, "Nougat", 360, 19.0, 9, 37.0),
//   createData(13, "Oreo", 437, 18.0, 63, 4.0),
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// const handleSelect = (id) => {
//   setSelectedIds((prev) =>
//     prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//   );
// };

// const handleChangePage = (event, newPage) => setPage(newPage);
// const handleChangeRowsPerPage = (event) => {
//   setRowsPerPage(parseInt(event.target.value, 10));
//   setPage(0);
// };

// const headCells = [
//   {
//     id: "name",
//     numeric: false,
//     disablePadding: true,
//     label: "Dessert (100g serving)",
//   },
//   {
//     id: "calories",
//     numeric: true,
//     disablePadding: false,
//     label: "Calories",
//   },
//   {
//     id: "fat",
//     numeric: true,
//     disablePadding: false,
//     label: "Fat (g)",
//   },
//   {
//     id: "carbs",
//     numeric: true,
//     disablePadding: false,
//     label: "Carbs (g)",
//   },
//   {
//     id: "protein",
//     numeric: true,
//     disablePadding: false,
//     label: "Protein (g)",
//   },
// ];

// function EnhancedTableHead(props) {
//   const {
//     onSelectAllClick,
//     order,
//     orderBy,
//     numSelected,
//     rowCount,
//     onRequestSort,
//   } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               "aria-label": "select all desserts",
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? "right" : "left"}
//             padding={headCell.disablePadding ? "none" : "normal"}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : "asc"}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(["asc", "desc"]).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// function EnhancedTableToolbar(props) {
//   const { numSelected } = props;
//   return (
//     <Toolbar
//       sx={[
//         {
//           pl: { sm: 2 },
//           pr: { xs: 1, sm: 1 },
//         },
//         numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(
//               theme.palette.primary.main,
//               theme.palette.action.activatedOpacity
//             ),
//         },
//       ]}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )}
//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteFilled></DeleteFilled>
//             {/* <DeleteIcon /> */}
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>{/* <FilterListIcon /> */}</IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

export default function blog({ blog }) {
  const [getBlogdata, setBlogdata] = useState([]);
  const router = useRouter();
  console.log("blogdata",blog)
  useEffect(() => {
    //  axios.get('http://localhost:3000/api/blog')
    //   .then((res)=>console.log("res",res))
    //   .then((error)=>console.log("error",error))

    if (blog.length !== 0) {
      setBlogdata(blog);
      localStorage.setItem("blogData", JSON.stringify(blog));
    } else {
      setBlogdata([]);
      localStorage.setItem("blogData", JSON.stringify([]));
    }
  }, []);
  const handleEdit = (e, slug) => {
    // console.log("edit",e,id)
    router.push(`/admin/blog/${slug}`);
  };
  const handledelete = (e, slug) => {
    axios
      .delete(`http://localhost:3000/api/blog/${slug}`)
      .then((res) => console.log("res", res))
      .then((err) => console.log("err", err));
  };
  const handleAdd = (e) => {
    console.log("add", e);
    router.push("/admin/blog/add");
  };
  //   const [order, setOrder] = React.useState("asc");
  //   const [orderBy, setOrderBy] = React.useState("calories");
  //   const [selected, setSelected] = React.useState([]);
  //   const [page, setPage] = React.useState(0);
  //   const [dense, setDense] = React.useState(false);
  //   const [rowsPerPage, setRowsPerPage] = useState(5);

  //   const handleRequestSort = (event, property) => {
  //     const isAsc = orderBy === property && order === "asc";
  //     setOrder(isAsc ? "desc" : "asc");
  //     setOrderBy(property);
  //   };

  //   const handleSelectAllClick = (event) => {
  //     if (event.target.checked) {
  //       const newSelected = rows.map((n) => n.id);
  //       setSelected(newSelected);
  //       return;
  //     }
  //     setSelected([]);
  //   };

  //   const handleClick = (event, id) => {
  //     const selectedIndex = selected.indexOf(id);
  //     let newSelected = [];

  //     if (selectedIndex === -1) {
  //       newSelected = newSelected.concat(selected, id);
  //     } else if (selectedIndex === 0) {
  //       newSelected = newSelected.concat(selected.slice(1));
  //     } else if (selectedIndex === selected.length - 1) {
  //       newSelected = newSelected.concat(selected.slice(0, -1));
  //     } else if (selectedIndex > 0) {
  //       newSelected = newSelected.concat(
  //         selected.slice(0, selectedIndex),
  //         selected.slice(selectedIndex + 1)
  //       );
  //     }
  //     setSelected(newSelected);
  //   };

  //   const handleChangePage = (event, newPage) => {
  //     setPage(newPage);
  //   };

  //   const handleChangeRowsPerPage = (event) => {
  //     setRowsPerPage(parseInt(event.target.value, 10));
  //     setPage(0);
  //   };

  //   const handleChangeDense = (event) => {
  //     setDense(event.target.checked);
  //   };

  // Avoid a layout jump when reaching the last page with empty rows.
  //   const emptyRows =
  //     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  //   const visibleRows = React.useMemo(
  //     () =>
  //       [...rows]
  //         .sort(getComparator(order, orderBy))
  //         .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
  //     [order, orderBy, page, rowsPerPage]
  //   );

  return (
    <>
      <AdminLayout>
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
          <Grid sx={{ mb: -2.25 }} size={12}>
            <Typography variant="h5">Dashboard | blog</Typography>
          </Grid>
          <Grid size={9}>
            <Typography variant="h4">Select blog to change</Typography>
            <Button
              variant="oultlined"
              color="primary"
              className="my-2 d-flex justify-content-end ms-auto"
              onClick={handleAdd}
            >
              Add Blog
            </Button>
            <Card className="mb-4">
              <CardContent className="d-flex justify-content-between">
                <IconButton>
                  <SearchOutlined />
                </IconButton>
                <input
                  className="form-control w-75"
                  name="search"
                  placeholder="Search blogs..."
                ></input>
                <Button variant="outlined">search</Button>
              </CardContent>
            </Card>

            <Paper sx={{ width: "100%" }}>
              <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  //   size={dense ? "small" : "medium"}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          //   indeterminate={selected.length > 0 && selected.length < rows.length}
                          //   checked={rows.length > 0 && selected.length === rows.length}
                          //   onChange={handleSelectAllClick}
                          inputProps={{
                            "aria-label": "select all desserts",
                          }}
                        ></Checkbox>
                      </TableCell>
                      {/* {console.log("get",Object.keys(getBlogdata[0]))} */}
                      <TableCell>Id</TableCell>
                      <TableCell>
                        <TableSortLabel
                        // onClick={handleRequestSort}
                        ></TableSortLabel>
                        h1
                      </TableCell>
                      <TableCell>CATEGORY</TableCell>
                      <TableCell>PUBLISHED</TableCell>
                      <TableCell>Edit</TableCell>
                      <TableCell>delete</TableCell>
                    </TableRow>
                  </TableHead>
                  {/* <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                  /> */}
                  <TableBody>
                    {getBlogdata.map((row, index) => {
                      //   const isItemSelected = selected.includes(row.id);
                      //   const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <TableRow
                          hover
                          //   onClick={(event) => handleClick(event, row.id)}
                          role="checkbox"
                          //   aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          //   selected={isItemSelected}
                          sx={{ cursor: "pointer" }}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              //   onClick={(event) => handleClick(event, row.id)}
                              //   checked={isItemSelected}
                              //   inputProps={{
                              //     "aria-labelledby": labelId,
                              //   }}
                            />
                          </TableCell>
                          <TableCell
                            component="th"
                            // id={labelId}
                            scope="row"
                            // padding="none"
                          >
                            {row.id}
                          </TableCell>
                          <TableCell>{row.h1}</TableCell>
                          <TableCell>{row.category}</TableCell>
                          <TableCell>{row.publish_date}</TableCell>
                          <TableCell>
                            <IconButton
                              onClick={(e) => handleEdit(e, row.slug)}
                            >
                              <EditFilled></EditFilled>
                            </IconButton>
                          </TableCell>
                          <TableCell>
                            <IconButton
                              onClick={(e) => handledelete(e, row.slug)}
                            >
                              <DeleteFilled></DeleteFilled>
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    {/* {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )} */}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
            </Paper>
          </Grid>
          <Grid size={3}>blog category</Grid>
          blog page
        </Grid>
      </AdminLayout>
    </>
  );
}

