import { AdminLayout } from "@/component/admin/AdminLayout";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";


export async function getServerSideProps(context) {
  const slug = context.params;
  return {
    props: {
      slug,
    },
  };
}

export default function userEditForm({ slug }) {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/users/${slug.slug}`)
      .then((res) => {
        setFormData(...res.data);
      })
      .then((err) => console.log("err", err));
  }, []);
  return (
    <>
      <AdminLayout>
        <Typography variant="h5" fontWeight="bold">
          Change User
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          {formData?.first_name}
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="first_name"
            name="first_name"
            value={formData?.first_name || ""}
            margin="normal"
          ></TextField>
          <TextField
            fullWidth
            label="last_name"
            name="last_name"
            value={formData?.last_name || ""}
            margin="normal"
          ></TextField>
          <TextField
            fullWidth
            label="email"
            name="email"
            value={formData?.email || ""}
            margin="normal"
          ></TextField>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              fullWidth
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData?.password || ""}
              margin="normal"
              // className="my-3"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    color="secondary"
                    sx={{ fontSize: "1rem" }}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
                      <EyeOutlined></EyeOutlined>
                    ) : (
                      <EyeInvisibleOutlined></EyeInvisibleOutlined>
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              placeholder="Enter password"
            ></OutlinedInput>
          </FormControl>
        </Box>
      </AdminLayout>
    </>
  );
}
