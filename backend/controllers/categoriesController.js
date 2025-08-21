const {
  getCategoryData,
  addCategory,
  editCategory,
  deleteCategory,
  singleCategoryData,
  searchCategory,
} = require("../models/Categories.js");


// ✅ get all category data api
const fetchCategoryData = async (req, res) => {
  try {
    const categories = await getCategoryData();
    res.json(categories);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

// ✅ fetch single category data api
const fetchSingleCategoryData = async (req, res) => {
  try {
    const  category_slug  = req.params.slug;

    console.log("blogslug", req.params.slug);

    if (!category_slug) {
      return res
        .status(400)
        .json({ success: false, message: "Category slug is required" });
    }
    const blog = await singleCategoryData(category_slug);
    res.json(blog);
  } catch (err) {
    console.error("error:", err);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};
// ✅ get search Blog data api
const fetchSearchCategoryData = async (req,res) => {
  try{
    const searchMessage = (req.query.q || "").trim();
    if(!searchMessage){
      return res.status(400).json({success:false,message:"Please provide a search query"});
    }
    const category = await searchCategory(searchMessage);
    res.json(category);
  } catch(err){
    console.error("error:",err);
    res.status(500).json({error:"Failed to fetch Category data"})
  }
}
// ✅ add category data api
const AddCategoryData = async (req, res) => {
  try {
    const { category_name, category_slug } = req.body;
    // console.log("name----", category_name, category_slug);

    if (!category_name || !category_slug) {
      return res
        .status(400)
        .json({ success: false, message: "Category name is required" });
    }

    const result = await addCategory(category_name, category_slug);
    res.status(201).json({
      success: true,
      message: "Category added successfully",
      data: { id: result.insertId, category_name, category_slug },
    });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ edit category data api
const EditCategoryData = async (req, res) => {
  const slug = req.params.slug;
  const fields = req.body;

  editCategory(slug, fields)
    .then((results) => {
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Blog category not found" });
      }
      console.log("results", results);
      res.status(200).json({ message: "Blog category updated successfully" });
    })
    .catch((err) => {
      if (err.message === "No fields to update") {
        return res.status(400).json({ message: err.message });
      }
      console.error("Error updating category:", err);
      res.status(500).json({ message: "Failed to update blog category" });
    });
};

// ✅ delete category data api
const DeleteCategoryData = async (req, res) => {
  try {
    const category_slug = req.params.slug;
    console.log("category_Slug", req.params.slug);
    if (!category_slug) {
      return res
        .status(400)
        .json({ success: false, message: "Category slug is required" });
    }
    const result = await deleteCategory(category_slug);
    if (res.affectedRows === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(201).json({
      success: true,
      message: "Category delete successfully",
      data: result,
    });
  } catch (err) {
    console.error("Error updating category:", err);
  }
};

module.exports = {
  fetchCategoryData,
  fetchSingleCategoryData,
  fetchSearchCategoryData,
  AddCategoryData,
  EditCategoryData,
  DeleteCategoryData,
};

// editCategory(slug,fields,(err,result)=>{
//   if(err){
//     if(err.status){
//       return res.status(err.status).json({message:err.message});
//     }
//     console.error("Error updating blog category:",err);
//     return res.status(500).json({message:"Failed to update blog category"})
//   }
//   res.status(result.status).json({message:result.message,success:false});
// });