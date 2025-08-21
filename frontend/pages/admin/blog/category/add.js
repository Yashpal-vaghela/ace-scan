import { AdminLayout } from "@/component/admin/AdminLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function categoryAddForm() {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e?.preventDefault();
    // console.warn("categoryaddform", formData);
    if (formData) {
      try {
        const res = await axios.post(
          `http://localhost:4000/api/categories`,
          formData
        );
        toast.success(`${res.data.message}`);
        setTimeout(() => {
          router.push("/admin/blog/category");
        }, 3000);
      } catch (err) {
        console.error("Update failed", err);
      }
    }
  };
  return (
    <>
      <AdminLayout>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Add Category
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="category_name"
            name="category_name"
            value={formData.category_name || ""}
            margin="normal"
            onChange={handleChange}
          ></TextField>
          <TextField
            fullWidth
            label="category_slug"
            name="category_slug"
            value={formData?.category_slug || ""}
            margin="normal"
            onChange={handleChange}
          ></TextField>
        </Box>
        <div
          className="d-flex justify-content-end gap-3"
          style={{ background: "#fff" }}
        >
          {/* <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2 }}
            onClick={() => router.push("/admin/blog/category/add")}
          >
            Save and add another
          </Button> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2, mr: 2 }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </AdminLayout>
    </>
  );
}