const db = require("../config/db");

// ✅ get Blog data api
const getBlogData = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM blog", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// ✅ get Single Blog data api
const singleBlog = (slug) => {
  return new Promise((resolve,reject) => {
    const query = `SELECT * FROM blog WHERE slug = '${slug}'`;
    db.query(query,(err,results)=>{
      if(err) return reject(err);
      resolve(results);
    });
  });
}

// ✅ search Blog Data api
const searchBlog = (searchQuery) => {
  return new Promise((resolve,reject)=>{
    // const query = `SELECT * FROM blog WHERE title LIKE ? OR category LIKE ? OR description LIKE ?`;
    const query = `SELECT * FROM blog WHERE title LIKE ? OR category LIKE ?`;
    const values = [`%${searchQuery}%`, `%${searchQuery}%`];
    db.query(query,values,(err,results)=>{
     if (err) return reject(err);
     resolve(results);
    });
  });
};

// ✅ add Blog data api
const addBlog = (title,slug,h1,description,canonical,og_type,category,image,author,publish_date,content,schema) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO blog (
            title,slug,h1,
            description,canonical,og_type,
            category,image,author,
            publish_date,content,\`schema\`
        ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`;
    const values = [
      title, slug, h1, description, canonical, og_type,
      category, image, author, publish_date, content, schema
    ];
    db.query(query, values,(err,results)=>{
      if(err) return reject(err);
      resolve(results);
    });
  });
};

// ✅ edit Blog data api
const editBlog = (slug,fields) => {
  const keys = Object.keys(fields);
  const values = Object.values(fields);

  if(keys.length === 0){
    throw new error ("No fields to update");
  }
  const setClause = keys.map((key)=>`${key} = ?`).join(", ");
  const query = `UPDATE blog SET ${setClause} WHERE slug = ?`;

  return new Promise((resolve,reject)=>{
    db.query(query,[...values,slug],(err,results)=>{
      if(err) return reject(err);
      resolve(results);
    });
  });
};

// ✅ delete Blog data api
const deleteBlog = (slug) => {
  const BlogSlug = slug;
  const query = "DELETE FROM blog WHERE slug = ?";

  return new Promise((resolve,reject)=>{
    db.query(query,[BlogSlug],(err,res)=>{
      if(err){
        console.error("Error deleteing category",err);
        return reject(err);
      }
      resolve(res);
    });
  });
};

module.exports = { getBlogData, singleBlog, searchBlog, addBlog, editBlog, deleteBlog};