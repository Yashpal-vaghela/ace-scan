import React, { useEffect, useState } from "react";
import { AdminLayout } from "@/component/admin/AdminLayout";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
} from "@mui/material";
import { Search, Edit, Delete, Visibility } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/router";


export default function user() {
  const [getUserData, setUserdata] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users")
      .then((res) => {
        setUserdata(res.data); 
      })
      .then((err) => console.log("err", err));
  }, []);
  
  return (
    <>
      <AdminLayout>
        <Grid container rowSpacing={4}>
          <Grid sx={{ mb: -2.25 }} size={12}>
            <Typography variant="h5" className="section-main-subtitle">Dashboard | <b>users</b></Typography>
          </Grid>
          <Grid size={12}>
            <Typography variant="h4" className="section-main-title mb-4">Select User to change</Typography>
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
                        {/* <TableSortLabel
                        // onClick={handleRequestSort}
                        ></TableSortLabel> */}
                        First Name
                      </TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Created At</TableCell>
                      <TableCell>View</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {getUserData.map((row, index) => {
                      //   const isItemSelected = selected.includes(row.id);
                      //   const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
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
                          <TableCell component="th" scope="row">
                            {row.id}
                          </TableCell>
                          <TableCell>{row.first_name}</TableCell>
                          <TableCell>{row.last_name}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <TableCell>{row.created_at}</TableCell>
                          <TableCell>
                            <IconButton
                              onClick={()=> router.push(`/admin/auth/user/${row?.first_name}`)}
                            >
                              <Visibility></Visibility>
                            </IconButton>
                          </TableCell>
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