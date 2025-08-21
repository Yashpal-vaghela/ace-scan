const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',  
    password: '',
    database:'ace_scan'
})
connection.connect((err)=>{
    if(err) throw err;
    console.log("Connect to MySQL database!")
})
module.exports = connection;

    //   const blog = await getBlogBySlug(slug);
    //   if (blog) {
    //     res.json(blog);
    //   } else {
    //     res.status(404).json({ message: "Blog not found" });
    //   }
  // const query = `SELECT * FROM blog WHERE slug = ?`
  // console.log("query",query,"slug",slug)
  // db.query(query,(err,results)=>{
  //     if(err){
  //         return res.status(500).json({error:'Database query failed'})
  //     }
  //     res.json(results);
  // })