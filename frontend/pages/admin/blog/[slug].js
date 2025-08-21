import { AdminLayout } from "@/component/admin/AdminLayout";
import {
  Typography,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export async function getServerSideProps(context) {
  const { slug } = context.params;
  return {
    props: {
      slug,
    },
  };
}

function blogForm({ slug, blog }) {
  const router = useRouter();
  const [originalData, setOriginalData] = useState([]);
  const [category, setCategory] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    h1: "",
    description: "",
    canonical: "",
    og_type: "",
    category: "",
    image: "",
    author: "",
    publish_date: "",
    content: "",
    schema: "",
  });
  const [date, setDate] = useState(
    formData?.publish_date ? dayjs(formData?.publish_date) : null
  );
  const [currentFileName, setCurrentFileName] = useState(formData?.image);
  
  const fetchCategoryData = async (e) => {
    await axios
      .get("http://localhost:4000/api/categories")
      .then((res) => {
        setCategory(res.data);
        if (category && category.length > 0) {
          setFormData((prev) => ({ ...prev, category: formData.category }));
        }
      })
      .then((err) => console.log("err", err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/blog/${slug}`)
      .then((res) => {
        setOriginalData(...res.data);
        setFormData(...res.data);
        setDate(dayjs(res.data[0]?.publish_date));
        setCurrentFileName(res.data[0]?.image);
      })
      .then((err) => console.log("error", err));
    fetchCategoryData();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const getChangeFields = () => {
    const changes = {};
    for (const key in formData) {
      if (formData[key] !== originalData[key]) {
        changes[key] = formData[key];
      }
    }
    return changes;
  };
  const handleEditApi = async (e) => {
    e?.preventDefault();
    const changedFields = getChangeFields();

    if (Object.keys(changedFields).length === 0) {
      toast.info("No fields Changed.");
      setTimeout(() => {
        router.push("/admin/blog");
      }, 2500);
      return;
    }

    try {
      const res = await axios.put(
        `http://localhost:4000/api/blog/${slug}`,
        changedFields
      );
      toast.success(`${res.data.message}`);
      setTimeout(() => {
        router.push("/admin/blog");
      }, 3000);
    } catch (err) {
      console.error("Update failed", err);
    }
  };
  const editor = useRef(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCurrentFileName(file.name);
    }
  };
  return (
    <>
      <AdminLayout>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Change blog
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          {formData.h1}
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ mt: 2 }}
          onSubmit={handleEditApi}
        >
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            margin="normal"
          />
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
            style={{ borderColor: "rgba(0, 102, 153, 1)" }}
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
              labelId="blog-category-label"
              id="blog-category-select"
              value={formData.category}
              label="Category"
              name="category"
              onChange={handleChange}
            >
              <MenuItem value="">Select category</MenuItem>
              {category &&
                category?.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item?.category_slug}>
                      {item?.category_name}
                    </MenuItem>
                  );
                })}
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
          <LocalizationProvider dateAdapter={AdapterDayjs} label="date picker">
            <DatePicker
              style={{ margin: "10px auto" }}
              label="Publish Date"
              value={date}
              onChange={(newValue) => setDate(dayjs(newValue))}
              slotProps={{
                textField: {
                  margin: "normal",
                  fullWidth: true,
                },
              }}
              suppressHydrationWarning
            ></DatePicker>
          </LocalizationProvider>
          <div className="image-group  align-items-center form-group mt-20 mb-20">
            <label className="form-control-label fw-bold me-4 ">
              Blog Img :
            </label>
            <div className="d-block">
              <p className="mb-2">
                <strong>Currently:</strong>
                <a
                  href={`${formData?.image}`}
                  style={{
                    padding: "0px 1rem",
                    color: "rgba(0, 102, 153, 1)",
                    fontWeight: "600",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formData?.image}
                </a>
              </p>
              <input
                className="form-control-file"
                id="exampleInputFile"
                aria-describedby="fileHelp"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
          </div>
          <label className="form-control-label fw-bold">Content :</label>
          <JoditEditor
            ref={editor}
            value={formData?.content}
            config={{ readonly: false, toolbarButtonSize: "small" }}
          ></JoditEditor>
          <TextField
            fullWidth
            name="schema"
            label="Schema"
            value={formData.schema}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={3}
          />
          <div className="d-flex justify-content-between">
            <Button
              variant="contained"
              sx={{ mt: 3, backgroundColor: "red !important" }}
            >
              Delete
            </Button>
            <div className="d-flex gap-3">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                onClick={handleEditApi}
              >
                Save
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
                onClick={()=>router.push("/admin/blog/add")}
              >
                Save and add another
              </Button>
              {/* <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 3 }}
              >
                Save and continue editing
              </Button> */}
            </div>
          </div>
        </Box>
      </AdminLayout>
    </>
  );
}

export default blogForm;
