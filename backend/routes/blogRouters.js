const express = require("express");

const { fetchBlogData, AddBlogData, EditBlogData, DeleteBlogData, fetchSingleBlogData, fetchSearchBlog } = require("../controllers/BlogController");

const router = express.Router();

router.get("/search",fetchSearchBlog);
router.get("/",fetchBlogData);
router.get("/:slug",fetchSingleBlogData);
router.post("/",AddBlogData);
router.put("/:slug",EditBlogData);
router.delete("/:slug",DeleteBlogData);

module.exports = router;