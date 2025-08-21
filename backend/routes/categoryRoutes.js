const express = require("express");
const {
  fetchCategoryData,
  AddCategoryData,
  EditCategoryData,
  DeleteCategoryData,
  fetchSingleCategoryData,
  fetchSearchCategoryData,
} = require("../controllers/categoriesController");

const router = express.Router();

router.get("/search",fetchSearchCategoryData)
router.get("/", fetchCategoryData);
router.get("/:slug",fetchSingleCategoryData);
router.post("/", AddCategoryData);
router.put("/:slug",EditCategoryData);
router.delete("/:slug",DeleteCategoryData)

module.exports = router;