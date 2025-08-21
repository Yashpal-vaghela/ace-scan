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
  IconButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import { Add } from "@mui/icons-material";
import { useRouter } from "next/router";
import axios from "axios";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

function blogAddForm() {
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const [category, setCategory] = useState([]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file.name });
    }
  };
  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (formData) {
      // console.log("formData",formData)
      try{
        const res = await axios.post(`http://localhost:4000/api/blog/`, formData);
          toast.success(`${res.data.message}`);
          setTimeout(()=>{
            router.push("/admin/blog");
          },3000);
      } catch(err){
        console.error("Update failed",err);
      }
      // axios
      //   .post(`http://localhost:4000/api/blog/`, formData)
      //   .then((res) => {
      //     console.log("res.data", res.data)})
      //   .then((err) => console.log("err", err));
    }
  };
  const handleGetBlogData = async (e) =>{
    await axios
      .get("http://localhost:4000/api/categories")
      .then((res) => {
        setCategory(res.data);
      })
      .then((err) => console.log("err", err));
  }
  useEffect(() => {
    handleGetBlogData();
  }, []);
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
          <div className="d-flex gap-3 align-items-center">
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
                <MenuItem>Select category</MenuItem>
                {category &&
                  category?.map((item) => {
                    return (
                      <MenuItem value={item?.category_name}>
                        {item?.category_name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
            <IconButton
              className="bg-blue"
              onClick={() => {
                router.push("/admin/blog/category/add");
              }}
            >
              <Add></Add>
            </IconButton>
          </div>

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
              value={formData.publish_date ? dayjs(formData.publish_date):null}
              onChange={(newValue) => {
                return setFormData({ ...formData,"publish_date": newValue ? dayjs(newValue).utc().toISOString():null});
              }}
              slotProps={{
                textField: {
                  margin: "normal",
                  fullWidth: true,
                },
              }}
            ></DatePicker>
          </LocalizationProvider>
         
          <div className="image-group  align-items-center form-group mt-20 mb-20">
            <label className="form-control-label fw-bold me-4 ">
              Blog Img :
            </label>
            <div className="d-block">
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
            name="content"
            value={formData?.content}
            onChange={(e)=>{
              setFormData({...formData,"content":e})
            }}
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
          <div
            className="d-flex justify-content-end gap-3"
            style={{ background: "#fff" }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, mb: 2 }}
              onClick={()=>router.push("/admin/blog/add")}
            >
              Save and add another
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, mb: 2, mr: 2 }}
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