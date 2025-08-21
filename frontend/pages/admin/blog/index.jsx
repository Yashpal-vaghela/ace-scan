import React, { use, useEffect, useState } from "react";
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
  // TablePagination,
  Card,
  CardHeader,
  // TextField,
  Button,
  CardContent,
  Dialog,
  useMediaQuery,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
import TableSortLabel from "@mui/material/TableSortLabel";
// import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useRouter } from "next/router";
import axios from "axios";
import { handleApiError } from "@/component/functions";
import SearchBox from "@/component/SearchBox";
import { Visibility } from "@mui/icons-material";

export async function getServerSideProps(context) {
  try {
    const res = await axios.get("http://localhost:4000/api/blog");
    const data = res.data;
    return {
      props: {
        blog: data,
      },
    };
  } catch (error) {
    return handleApiError(error);
  }
}
export default function blog({ blog }) {
  const [getBlogdata, setBlogdata] = useState([]);
  const [getCategory, setCategory] = useState([]);
  const [selected, setSelected] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (blog.length !== 0) {
      setBlogdata(blog);
      localStorage.setItem("blogData", JSON.stringify(blog));
    } else {
      setBlogdata([]);
      localStorage.setItem("blogData", JSON.stringify([]));
    }
    axios
      .get("http://localhost:4000/api/categories")
      .then((res) => {
        console.log("res", res.data);
        setCategory(res.data);
      })
      .then((err) => console.log("err", err));
  }, []);
  const handleEdit = (e, slug) => {
    // console.log("getCategory", getCategory);
    // router.push({pathname: `/admin/blog/${slug}`,query:getCategory})
    router.push(`/admin/blog/${slug}`);
    // console.log("window",window)
  };
  const [blogtitle, setBlogTitle] = useState({});
  const handledelete = (e, slug, data, action) => {
    setOpen(true);
    setBlogTitle(data?.h1);
    const filterdata = data.slug === slug;
    if (action === "delete" && filterdata === true) {
      axios
        .delete(`http://localhost:4000/api/blog/${slug}`)
        .then((res) => {
          setOpen(false);
          const filterdata = getBlogdata.filter((ie) => ie.slug !== slug);
          localStorage.setItem("blogData", JSON.stringify(filterdata));
          setBlogdata(filterdata);
        })
        .then((err) => console.log("err", err));
    }
  };
  // const handleClose = (e, action) => {
  //   setOpen(false);
  // };
  // const handleAdd = (e) => {
  //   router.push("/admin/blog/add");
  // };
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleSelectedAllClick = (e) => {
    if (e.target.checked) {
      setSelected(getBlogdata.map((row) => row.id));
    } else {
      setSelected([]);
    }
  };

  // ✅ Toggle single row
  const handleRowClick = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((s) => s !== id));
    } else {
      setSelected([id]); // 👈 ensures only that one is selected
    }
  };

  const isSelected = (id) => selected.includes(id);

  return (
    <>
      <AdminLayout>
        <Grid container rowSpacing={4}  columnSpacing={2.75}>
          <Grid size={12} sx={{ mb: -2.25 }}>
            <Typography variant="h5" className="section-main-subtitle">
              Dashboard | <b>blog</b>
            </Typography>
          </Grid>
          <Grid size={{xs:12,md:9}} >
            <Typography variant="h4" className="section-main-title">
              Select blog to change
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              className="my-2 d-flex justify-content-end ms-auto"
              onClick={() => {
                router.push("/admin/blog/add");
              }}
              // onClick={handleAdd}
            >
              Add Blog
            </Button>
            <SearchBox data={getBlogdata} />

            <Paper sx={{ width: "100%" }}>
              <TableContainer>
                <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          indeterminate={
                            selected.length > 0 &&
                            selected.length < getBlogdata.length
                          }
                          checked={
                            getBlogdata.length > 0 &&
                            selected.length === getBlogdata.length
                          }
                          onChange={handleSelectedAllClick}
                          // onChange={handleSelectAllClick}
                          // checked={selected.includes(item)}
                          // onChange={handleChange}
                          inputProps={{
                            "aria-label": "select all desserts",
                          }}
                        ></Checkbox>
                      </TableCell>
                      <TableCell>Id</TableCell>
                      <TableCell>
                        <TableSortLabel
                        // onClick={handleRequestSort}
                        ></TableSortLabel>
                        h1
                      </TableCell>
                      <TableCell>CATEGORY</TableCell>
                      <TableCell>PUBLISHED</TableCell>
                      <TableCell>view</TableCell>
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
                      const isItemSelected = isSelected(row.id);
                      //   const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={index}
                          sx={{ cursor: "pointer" }}
                          selected={isItemSelected}
                        >
                          {console.log("select", selected)}
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              // checked={selected.length > 0 || ""}
                              // onClick={handleSelectedAllClick}
                              //   onClick={(event) => handleClick(event, row.id)}
                              checked={isItemSelected}
                              onChange={() => handleRowClick(row.id)}
                              //   inputProps={{
                              //     "aria-labelledby": labelId,
                              //   }}
                            />
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell>{row.h1}</TableCell>
                          <TableCell>{row.category}</TableCell>
                          <TableCell>{row.publish_date}</TableCell>
                          <TableCell>
                            <IconButton onClick={()=>{router.push(`/admin/blog/${row.slug}`)}}>
                              <Visibility></Visibility>
                            </IconButton>
                          </TableCell>
                          <TableCell>
                            <IconButton
                              onClick={()=>{router.push(`/admin/blog/${row.slug}`)}}
                            >
                              <EditFilled></EditFilled>
                            </IconButton>
                          </TableCell>
                          <TableCell>
                            <IconButton
                              onClick={(e) => handledelete(e, row.slug, row)}
                            >
                              <DeleteFilled></DeleteFilled>
                            </IconButton>
                          </TableCell>
                          <Dialog
                            fullScreen={fullScreen}
                            open={open}
                            onClose={() => {
                              setOpen(false);
                            }}
                            aria-labelledby="responsive-dialog-title"
                            sx={{
                              "& .MuiDialog-paper": {
                                maxWidth: "500px", // custom width
                                width: "100%", // optional
                              },
                            }}
                          >
                            <DialogTitle
                              id="responsive-dialog-title"
                              sx={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              {"Are you sure you want to delete?"}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText sx={{ fontSize: "16px" }}>
                                {blogtitle}
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button
                                autoFocus
                                onClick={(e) =>
                                  handledelete(e, row.slug, row, "delete")
                                }
                                sx={{
                                  "& .MuiButtonBase-root": {
                                    // backgroundColor:"red",
                                    bgcolor: `${theme.dark}`,
                                  },
                                }}
                              >
                                Delete
                              </Button>
                              <Button
                                autoFocus
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                Cancel
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </TableRow>
                      );
                    })}
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
          <Grid size={{xs:12,md:3}}>
            <Card className=" h-100">
              <CardHeader
                title="FILTER"
                sx={{
                  backgroundColor: "rgba(0, 102, 153, 1)",
                  color: "#fff",
                  letterSpacing: "0.4px",
                }}
                className="py-2"
              ></CardHeader>
              <CardContent>
                <Typography
                  variant="h5"
                  className="mb-3 fw-bold"
                  sx={{ color: "rgba(0, 102, 153, 1)" }}
                >
                  By Category
                </Typography>
                {getCategory?.map((item, index) => {
                  return (
                    <p className="mb-2" key={index}>
                      {item.category_name}
                    </p>
                  );
                })}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </AdminLayout>
    </>
  );
}