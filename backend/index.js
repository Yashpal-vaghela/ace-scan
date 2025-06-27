const express = require("express");
// const http = require('http');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Successfully Connected on port 3000.");
});

// get blog data
app.get("/api/blog", (req, res) => {
  const query = "SELECT * FROM blog";

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json(results);
  });
});

app.get("/api/blog/:slug",  (req, res) => {
  const {slug} = req.params; 
  const query = `SELECT * FROM blog WHERE slug = '${slug}'`;
  //   console.log("slug",slug,"req,",req.params,query)
  db.query(query,(err,results)=>{
    if(err){
        return res.status(500).json({error:"Database query failed"})
    }
    res.json(results);
  });
});
// search query
app.get("/api/blog/search", async (req,res) => {
  try{
    const {q} = req.query;
    if (!q) {
      return res.status(400).json({ error: 'Missing search query' });
    }
    const searchQuery = `%${q}%`;
    console.log("searchQUERY",searchQuery,"query",q)
    
     const sql = `
      SELECT * FROM blog 
      WHERE title LIKE ? 
        OR category LIKE ? 
        OR description LIKE ?
    `;
       const [results] = await db.query(sql, [searchQuery, searchQuery, searchQuery]);
    res.json(results);
 }catch(error){
    console.error(error);
    res.status(500).send("Error searching blogs")
  }
})
// Insert api blog
// app.post('/api/blog',(req,res)=>{
//     const {description,title,og_type,image,canonical,published,h1,content,slug,author,schema,category} = req.body;
//     const query = `
//                     INSERT INTO blog (
//                         description,title,og_type,
//                         image,canonical,published,
//                         h1,content,slug,
//                         author,schema,category
//                     ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`;

//     const values = [
//         description,title,og_type,
//         image,canonical,published,
//         h1,content,slug,
//         author,schema,category
//     ]
//     db.query(query,values,(err,results)=>{
//         if(err){
//             console.error('Error inserting blog post:', err);
//             return res.status(500).json({message:'Failed to insert blog post'});
//         }
//         res.status(201).json({message:'Blog post created',postId:results.insertId})
//     })
// })

// Insert api blog
app.post("/api/blog", (req, res) => {
  const {
    title,
    slug,
    h1,
    description,
    og_type,
    category,
    image,
    author,
    publish_date,
    content,
    schema,
  } = req.body;

  const domain = "https://advancedentalexport.com/";
  const canonical = `${domain}${slug}`;
  
  // const query = `
  //     INSERT INTO blog (
  //         description,title,og_type,
  //         image,canonical,published,
  //         h1,content,slug,
  //         author,schema,category
  //     ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`;

  const query = `
        INSERT INTO blog (
            title,slug,h1,
            description,canonical,og_type,
            category,image,author,
            publish_date,content,\`schema\`
        ) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`;

  const values = [
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
  ];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error("Error inserting blog post:", err); // shows the real error in console
      return res.status(500).json({ message: "Failed to insert blog post" });
    }
    // console.log('Results:', results);
    // console.log("Inserted ID:",results.insertId);
    res.status(201).json({
        message: "Blog post created",
        postId: results.insertId,
        canonical: canonical,
      });
  });
});

// edit blog data
// app.patch('/api/blog/:id',(req,res)=>{
//     const blogId = req.params.id;
//     const {title,description,slug} = req.body;

//     const query = `UPDATE blog SET title = ?,
//     description = ?,slug = ? WHERE id = ?`

//     const values = [title,description,slug,blogId];
//     db.query(query,values,(err,results)=>{
//         if(err){
//             console.error('Error updating blog post:',err);
//             return res.status(500).json({message:'Failed to update blog post'});
//         }
//         if(results.affectedRows === 0){
//             return res.status(404).json({message:'Blog post not found'});
//         }
//         res.status(200).json({message:'Blog post updated successfully'});
//     });
// });

// edit blog data
app.patch("/api/blog/:slug", (req, res) => {
  const blogSlug = req.params.slug;
  const fields = req.body;

  // Dynamically build SET clause and values array
  const keys = Object.keys(fields);
  const values = Object.values(fields);

  if (keys.length === 0) {
    return res.status(400).json({ message: "No fields to update" });
  }

  const setClause = keys.map((key) => `${key} = ?`).join(", ");
  const query = `UPDATE blog SET ${setClause} WHERE slug = ?`;

  db.query(query, [...values, blogSlug], (err, result) => {
    if (err) {
      console.error("Error updating blog post:", err);
      return res.status(500).json({ message: "Failed to update blog post" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json({ message: "Blog post updated successfully" });
  });
});

// delete blog data
app.delete("/api/blog/:slug", (req, res) => {
  const blogSlug = req.params.slug;
  const query = "DELETE FROM blog WHERE slug = ?";

  db.query(query, [blogSlug], (err, result) => {
    if (err) {
      console.error("Error deleteing blog post:", err);
      return res.status(500).json({ message: "Failed to delete blog post" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json({ message: "Blog post deleted successfully" });
  });
});

app.get("/blog", (req, res) => {
  res.render("blog");
});


// const server = http.createServer((req,res)=>{
//     if(req.method == "GET" && req.url == "/"){
//     }
// }) 