const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/db");
const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/categoryRoutes");
const blogRoutes = require("./routes/blogRouters");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/api", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/blog",blogRoutes);

// app.get("/api/blog/search", async (req, res) => {
//   try {
//     const searchQuery = (req.query.q || "").trim();
//     // console.log("searchQuery", searchQuery);

//     if (!searchQuery) {
//       return res.status(400).json({ message: "Please provide a search query" });
//     }

//     const sql = "SELECT * FROM blog WHERE title LIKE ? OR category LIKE ? OR description LIKE ?";
//     const values = [`%${searchQuery}%`, `%${searchQuery}%`, `%${searchQuery}%`];

//     // console.log("values",values,"q",searchQuery);
//     const [rows] = await db.query(sql, values);
//     // if (rows.length === 0) {
//     //   return res.status(404).json({ error: "Blog Data not found" });
//     // }
//     res.json(rows);
//   } catch (err) {
//     console.error("err:", err);
//     res.status(500).json({ error: "Failed to fetch Blog data" });
//   }
// });

// new search api
// app.get("/api/blog/search",  (req, res) => {
//   try {
//     const searchQuery = (req.query.q || "").trim();
//     if (!searchQuery) {
//       return res.status(400).json({ message: "Please provide a search query" });
//     }
//     const sql = `SELECT * FROM blog WHERE title LIKE ? OR category LIKE ? OR description LIKE ?`;
//     const values = [`%${searchQuery}%`, `%${searchQuery}%`, `%${searchQuery}%`];

//     db.query(sql, values, (err, rows) => {
//       if (err) {
//         console.error("err:", err);
//         return res.status(500).json({ message: "Database error", error: err });
//       }

//       if (rows.length > 0) {
//         res.json(rows);
//       } else {
//         res.status(404).json({ message: "Blog not found" });
//       }
//     });
//   } catch (err) {
//     console.log("err:", err);
//     res.status(500).json({ message: "Database error:", err });
//   }
// });

app.listen(4000, () => {
  console.log("Successfully Connected on port 4000.");
});

// get blog data
// app.get("/api/blog", (req, res) => {
//   const query = "SELECT * FROM blog";
//   // const query1 = "SELECT * FROM blog_category"
//   // const query =
//   //   "SELECT  blog.id, blog.title,  blog.content,  blog_category.name AS category_name FROM blog JOIN blog_category ON blog.category_id = blog_category.id";

//   // const query = `
//   //   SELECT
//   //     blog.id,
//   //     blog.title,
//   //     blog.content,
//   //     blog_category.category_name AS category_name,
//   //     blog_category.category_slug AS category_slug
//   //   FROM blog
//   //   JOIN blog_category
//   //     ON blog.category_slug = blog_category.category_slug
//   // `;
//   db.query(query, (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: "Database query failed" });
//     }
//     res.json(results);
//   });
// });

// app.get("/api/blog/:slug", (req, res) => {
//   const { slug } = req.params;
//   const query = `SELECT * FROM blog WHERE slug = '${slug}'`;
//   //   console.log("slug",slug,"req,",req.params,query)
//   db.query(query, (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: "Database query failed" });
//     }
//     res.json(results);
//   });
// });
// search query

// try {
//   const { q } = req.query;
//   if (!q) {
//     return res.status(400).json({ error: "Missing search query" });
//   }
//   const searchQuery = `%${q}%`;
//   console.log("searchQUERY", searchQuery, "query", q);

//   const sql = `
//     SELECT * FROM blog
//     WHERE title LIKE ?
//       OR category LIKE ?
//       OR description LIKE ?
//   `;
//   const [results] = await db.query(sql, [
//     searchQuery,
//     searchQuery,
//     searchQuery,
//   ]);
//   res.json(results);
// } catch (error) {
//   console.error(error);
//   res.status(500).send("Error searching blogs");
// }
