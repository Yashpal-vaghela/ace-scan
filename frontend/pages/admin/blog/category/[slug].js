import { AdminLayout } from "@/component/admin/AdminLayout";
import { TextField, Typography, Box, Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  return {
    props: {
      slug,
    },
  };
}
const categoryForm = ({ slug }) => {
  const [formData, setFormData] = useState({});
  const [originalData, setOriginalData] = useState([]);
  const router = useRouter();
  
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/categories/${slug}`)
      .then((res) => {
        // console.log("res", res.data);
        setFormData(...res.data);
        setOriginalData(...res.data);
        // setCategoryData(...res.data);
      })
      .then((err) => console.log("err", err));
      // console.warn("sluug",slug)
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
    // console.log("changes", changes, formData);
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
      const res = await axios.patch(
        `http://localhost:4000/api/categories/${slug}`,
        changedFields
      );
      // console.log("res", res.data);
      toast.success(`${res.data.message}`);
      setTimeout(() => {
        router.push("/admin/blog/category");
      }, 3000);
    } catch (err) {
      console.error("Update failed", err);
    }
  };
  return (
    <>
      <AdminLayout>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Change Category
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          {formData?.category_name}
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
            label="category_name"
            name="category_name"
            value={formData?.category_name || ""}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="category_slug"
            name="category_slug"
            value={formData?.category_slug || ""}
            onChange={handleChange}
            margin="normal"
          ></TextField>
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
                onClick={() =>
                  router.push("/admin/blog/category/add")
                }
              >
                Save and add another
              </Button>
            </div>
          </div>
        </Box>
      </AdminLayout>
    </>
  );
};

export default categoryForm;
