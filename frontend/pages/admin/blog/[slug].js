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
  Link,
  Stack,
  IconButton
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import { CKEditor } from '@ckeditor/ckeditor5-react';

export async function getServerSideProps(context){
  const {slug} = context.params;
  

  return{
    props:{
      slug,
    }
  }
}

function blogForm({slug,blog}) {
  const [status, setStatus] = useState(true);
  const router = useRouter();
  const pathname = router.query.slug;
  const [originalData,setOriginalData] = useState([])
  const [formData, setFormData] = useState({
    title: '',  
    slug: '',
    h1: '',
    description: '',
    canonical: "",
    og_type: "",
    category:"",
    image: "",
    author:"",
    publish_date:'',
    content:"",
    schema:""
  });
  const [content,setContent] = useState('');
  // const [getBlogdata,setBlogdata] = useState(JSON.parse(localStorage.getItem('blogData')));
  
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/blog/${slug}`)
    .then((res)=>{
      const date = new Date(res.data[0].publish_date)
      const options = {day:'numeric',month:'long',year:'numeric'}
      const formattedDate = date.toLocaleDateString('en-US',options)
      console.log("date",date,formattedDate)
      setOriginalData(...res.data)
      setFormData(...res.data)
      console.log("res",res.data)})
    .then((err)=>console.log("error",err))
    console.log("getBlogdata",router,pathname,"slug",slug,blog);
  },[])
  
  const handleChange = (e) => {

    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const getChangeFields = () =>{
    const changes = {}
    for(const key in formData){
      if(formData[key] !== originalData[key]){
        changes[key] = formData[key];
      }
    }
    console.log("changes",changes,formData)
    return changes;
  }
  const handleEditApi = async (e) =>{
    e?.preventDefault();
    const changedFields = getChangeFields();

    if(Object.keys(changedFields).length === 0){
      alert("No fields Changed.")
      return;
    }
    console.log("changeFid",changedFields,Object.keys(changedFields))

    try{
      const res = await axios.patch(`http://localhost:3000/api/blog/${slug}`,changedFields);
      console.log("res",res.data);
      router.push("/admin/blog");
      console.log("Update success",res.data);
    }catch(err){
      console.error("Update failed",err);
    }

    console.log("formdata",formData);
  }
  return (
    <>
      <AdminLayout>
           <Typography variant="h5" fontWeight="bold" gutterBottom>
              Change blog
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              {formData.h1}
            </Typography>
            <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }} onSubmit={handleEditApi}>
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
                    <Select labelId="demo-simple-select-label"
                        id="blog-category-select"
                        value={formData.category}
                        label="Category"
                        onChange={handleChange}>
                        <MenuItem >a</MenuItem>
                        <MenuItem >b</MenuItem>
                        <MenuItem >c</MenuItem>
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
            {console.log("formdata",formData)}
             <Box sx={{ mt: 2 }} className="d-flex">
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Published:
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <TextField
                    type="date"
                    value={formData.publish_date}
                    onChange={handleChange}
                    size="small"
                    sx={{ width: 200 }}
                    InputLabelProps={{ shrink: true }}
                  />
                </Stack>
             </Box>
              <TextField
                  type="date"
                  fullWidth
                  label="Publish_date"
                  name="publish_date"
                  value={formData.publish_date}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows={1}
              />  
              <div className="editor-container" style={{margin:'20px'}}>
                <h2>Content:</h2>
                {/* <CKEditor editor={}></CKEditor> */}
              </div>
              <TextField
                  fullWidth
                ame="schema"
                  va label="Schema"
                  nlue={formData.schema}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows={3}
              />
            <div className="d-flex justify-content-between">
              <Button variant="contained"  sx={{mt:3,backgroundColor:'red !important'}}>Delete</Button>
              <div className="d-flex gap-3">
                <Button type="submit"  variant="contained" color="primary" sx={{ mt: 3 }}> 
                    Save and add another
                </Button>
                <Button type="submit"  variant="contained" color="primary" sx={{ mt: 3 }}> 
                    Save and continue editing
                </Button>
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }} 
                    // onClick={handleEditApi()}
                > 
                    Save 
                </Button>
              </div>
            </div>
            </Box>
      </AdminLayout>
    </>
  );
}

export default blogForm;
