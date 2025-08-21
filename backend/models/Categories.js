const db = require("../config/db");

// ✅ get all category data api
const getCategoryData = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM blog_category", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// ✅ fetch single category data api
const singleCategoryData = (slug) => {
  console.log("slug", slug);
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM blog_category WHERE category_slug = ?`;
    console.warn("query",query)
    db.query(query, [slug], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// ✅ add category data api
const addCategory = (name, slug) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO blog_category (category_name,category_slug) VALUES(?,?)`;
    // console.log("name1=====",name)
    db.query(query, [name, slug], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};
// ✅ search Blog Data api
const searchCategory = (searchQuery) =>{
  return new Promise((resolve,reject)=>{
    const query = `SELECT * FROM blog_category WHERE category_name LIKE ?`
    const values = [`%${searchQuery}%`];
    db.query(query,values,(err,results)=>{
      if(err) return reject(err);
      resolve(results);
    })
  })
}
// ✅ edit category data api
const editCategory = (slug, fields) => {
  const keys = Object.keys(fields);
  const values = Object.values(fields);

  if (keys.length === 0) {
    throw new Error("No fields to update");
    // return callback({ status: 400, message: "No fields to update" });
  }
  const setClause = keys.map((key) => `${key} = ?`).join(", ");
  const query = `UPDATE blog_category SET ${setClause} WHERE category_slug = ?`;

  return new Promise((resolve, reject) => {
    db.query(query, [...values, slug], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// ✅ delete category data api
const deleteCategory = (slug, fields) => {
  const categoryId = slug;
  const query = "DELETE FROM blog_category WHERE category_slug = ?";

  return new Promise((resolve, reject) => {
    db.query(query, [categoryId], (err, res) => {
      if (err) {
        console.error("Error deleteing blog category data", err);
        return reject(err);
        // return res
        //   .status(500)
        //   .json({ message: "Failed to delete blog category data" });
      }
      resolve(res);
      // if (res.affectedRows === 0) {
      //   return res.status(404).json({ message: "Blog post not found" });
      // }

      // res.status(200).json({ message: "Blog post deleted successfully" });
    });
  });
};
module.exports = {
  getCategoryData,
  singleCategoryData,
  searchCategory,
  addCategory,
  editCategory,
  deleteCategory,
};
