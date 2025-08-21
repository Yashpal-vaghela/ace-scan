import { AdminLayout } from "@/component/admin/AdminLayout";
import React, { useEffect, useState } from "react";
import SearchBox from "@/component/SearchBox";
import {
  Grid,
  Paper,
  TableBody,
  TableCell,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  Checkbox,
  TableContainer,
  TableSortLabel,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/router";
import { handleApiError } from "@/component/functions";

export async function getServerSideProps(context) {
  try {
    const res = await axios.get("http://localhost:4000/api/categories");
    const data = res.data;
    return {
      props: {
        category: data,
      },
    };
  } catch (err) {
    return handleApiError(err);
  }
}

export default function index({ category }) {
  const [categoryData, setCategorydata] = useState([]);
  const [open, setOpen] = useState(false);
  const [categorytitle, setCategoryTitle] = useState("");
  const router = useRouter();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleGetData = async () => {
    if (category.length !== 0) {
      setCategorydata(category);
    } else {
      setCategorydata([]);
    }
  };
  useEffect(() => {
    handleGetData();
  }, []);

  const handledelete = (e, slug, action) => {
    setOpen(true);
    setCategoryTitle(slug);
    if (action === "delete") {
      axios
        .delete(`http://localhost:4000/api/categories/${slug}`)
        .then((res) => {
          setOpen(false);
          handleGetData();
        })
        .then((err) => console.log("err", err));
    }
  };

  return (
    <>
      <AdminLayout>
        <Grid container rowSpacing={3.5} columnSpacing={2}>
          <Grid sx={{ mb: -2.25 }} size={12}>
            <Typography variant="h5" className="section-main-subtitle">
              Dashboard | <b>Category</b>
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography variant="h4" className="section-main-title">
              Select blog to change
            </Typography>
            <Button
              variant="oultlined"
              color="primary"
              className="my-2 d-flex justify-content-end ms-auto"
              onClick={() => router.push("/admin/blog/category/add")}
            >
              Add Category
            </Button>
            <SearchBox data={categoryData} />

            <Paper sx={{ width: "100%" }}>
              <TableContainer>
                <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
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

                      <TableCell>Id</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell colSpan={3}>Slug</TableCell>
                      <TableCell>Edit</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {categoryData?.map((data) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={data.id}
                          sx={{ cursor: "pointer" }}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox color="primary"></Checkbox>
                          </TableCell>
                          <TableCell>{data?.id}</TableCell>
                          <TableCell>{data?.category_name}</TableCell>
                          <TableCell>{data?.category_slug}</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell>
                            <IconButton
                              onClick={() =>
                                router.push(
                                  `/admin/blog/category/${data?.category_slug}`
                                )
                              }
                            >
                              <Edit></Edit>
                            </IconButton>
                          </TableCell>
                          <TableCell>
                            <IconButton
                              onClick={(e) =>
                                handledelete(e, data?.category_slug)
                              }
                            >
                              <Delete></Delete>
                            </IconButton>
                          </TableCell>
                          <Dialog
                            fullScreen={fullScreen}
                            open={open}
                            onClose={()=>setOpen(false)}
                            aria-labelledby="responsive-dialog-title"
                            sx={{
                              "& .MuiDialog-paper": {
                                maxWidth: "500px",
                                width: "100%",
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
                                {categorytitle}
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button
                                autoFocus
                                onClick={() => setOpen(false)}
                              >
                                Cancel
                              </Button>
                              <Button
                                autoFocus
                                onClick={(e) =>
                                  handledelete(e, data?.category_slug, "delete")
                                }
                                sx={{
                                  backgroundColor: "white",
                                  border: "2px solid red",
                                  color: "red",
                                }}
                              >
                                confirm
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </AdminLayout>
    </>
  );
}
