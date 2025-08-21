const { getBlogData, addBlog, editBlog, deleteBlog, singleBlog, searchBlog } = require("../models/Blog.js");

// ✅ get Blog data api
const fetchBlogData = async (req, res) => {
  try {
    const blog = await getBlogData();
    res.json(blog);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: "Failed to fetch Blog" });
  }
};

// ✅ get Single Blog data api
const fetchSingleBlogData = async (req,res) => {
  try{
    const Blogslug = req.params.slug;
    // console.log("blogslug",req.params.slug);

    if(!Blogslug){
      return res.status(400).json({success:false,message:err.message});
    }
    const blog = await singleBlog(Blogslug);
    res.json(blog);
  } catch(err){
    console.error("error:",err);
    res.status(500).json({error:"Failed to fetch Blog"})
  }
}

// ✅ get search Blog data api
const fetchSearchBlog = async (req,res) => {
  try{
    const searchMessage = (req.query.q || "").trim();
    console.log("searchMessage",req.query);
    if(!searchMessage){
      return res.status(400).json({success:false,message:"Please provide a search query"});
    }
    const blog = await searchBlog(searchMessage);
    res.json(blog);
  }catch(err){
    console.error("error:",err)
    res.status(500).json({error:"Failed to fetch Blog data"})
  }
}

// ✅ add Blog data api
const AddBlogData = async (req, res) => {
  try {
    const {
      title,
      slug,
      h1,
      description,
      canonical,
      og_type,
      category,
      image,
      author,
      publish_date,
      content,
      schema,
    } = req.body;

    const result = await addBlog(
      title,
      slug,
      h1,
      description,
      canonical,
      og_type,
      category,
      image,
      author,
      publish_date,
      content,
      schema
    );
    res.status(201).json({
      success: true,
      message: "Blog added successfully",
      data: {
        id: result.insertId,
        title, slug, h1, description, canonical, og_type,
        category, image, author, publish_date, schema,
      },
    });
  } catch (error) {
    console.error("Error adding Blog:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ edit Blog data api
const EditBlogData = async (req,res) => {
  const slug = req.params.slug;
  const fields = req.body;

  editBlog(slug,fields)
  .then((results)=>{
    if(results.affectedRows === 0){
      return res.status(404).json({message:"Blog not found"});
    }
    console.log("results",results);
    res.status(200).json({message:"Blog updated successfully"});
  })
  .catch((err)=>{
    if(err.message === "No fields to update"){
      return res.status(400).json({message:err.message});
    }
    console.error("Error updating category:",err.message);
    res.status(500).json({message:"Failed to update Blog"})
  });
};

// ✅ delete Blog data api
const DeleteBlogData = async (req,res) =>{
  try{
    const blog_slug = req.params.slug;
    if(!blog_slug){
      return res.status(400).json({success:false,message:"Blog slug is required"});
    }
    const result = await deleteBlog(blog_slug);
    if(res.affectedRows === 0){
      return res.status(404).json({message:"Blog not found"});
    }
    res.status(201).json({
      success:true,
      message:"Blog delete successfully",
      data:result
    });
  }catch(err){
    console.error("Error updating blog:",err)
  }
}

module.exports = { fetchBlogData, fetchSingleBlogData, fetchSearchBlog, AddBlogData, EditBlogData, DeleteBlogData};
