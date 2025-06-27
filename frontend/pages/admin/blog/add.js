import { AdminLayout } from "@/component/admin/AdminLayout";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";

function blogAddForm() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    console.log("e", e);
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {};
  return (
    <>
      <AdminLayout>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Add blog
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ mt: 2 }}
          onSubmit={handleSubmit}
        >
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            margin="normal"
          ></TextField>
          <TextField
            fullWidth
            label="Slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="H1"
            name="h1"
            value={formData.h1}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={2}
          />
          <TextField
            fullWidth
            label="Canonical"
            name="canonical"
            value={formData.canonical}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={1}
          />
          <TextField
            fullWidth
            label="Og_type"
            name="og_type"
            value={formData.og_type}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={1}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="blog-category-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="blog-category-select"
              value={formData.category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem>a</MenuItem>
              <MenuItem>b</MenuItem>
              <MenuItem>c</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={1}
          />
          <TextField
            fullWidth
            ame="schema"
            va
            label="Schema"
            nlue={formData.schema}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={3}
          />
          <div
            className="d-flex justify-content-end gap-3 "
            style={{ background: "#fff" }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, mb: 2 }}
            >
              Save and add another
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, mb: 2 }}
            >
              Save and continue editing
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, mb: 2, mr: 2 }}
              // onClick={handleEditApi()}
            >
              Save
            </Button>
          </div>
        </Box>
      </AdminLayout>
    </>
  );
}

export default blogAddForm; 