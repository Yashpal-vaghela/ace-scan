const {
  getUserData,
  AddUser,
  EditUser,
  DeleteUser,
  singleUserData,
} = require("../models/User.js");

// ✅ get users data api
const fetchUserData = async (req, res) => {
  try {
    const user = await getUserData();
    res.json(user);
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
// ✅ get single users data api
const fetchSingleUserData = async (req, res) => {
    console.log("req",req,"req-params",req.params)
  try {
    const userFirstName = req.params.firstName;
    if (!userFirstName) {
      return res
        .status(400)
        .json({ success: false, message: "User first Name is required" });
    }
    const users = await singleUserData(userFirstName);
    res.json(users);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
// ✅ add users data api
const AddUserData = async (req, res) => {
  try {
    const { first_name, last_name, email, created_at,password } = req.body;
    // console.log("req",req.body)
    const result = await AddUser(first_name, last_name, email, created_at,password);
    res.status(201).json({
      success: true,
      message: "User added successfully",
      data: { id: result.insertId, first_name, last_name, email, created_at,password },
    });
  } catch (err) {
    console.log("error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};
// ✅ edit users data api
const EditUserData = async (req, res) => {
  const id = req.params.firstName;
  const fields = req.body;

  EditUser(id, fields)
    .then((results) => {
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      console.log("results", results);
      res.status(200).json({ message: "User updated successfully" });
    })
    .catch((err) => {
      if (err.message === "No fields to update") {
        return res.status(400).json({ message: err.message });
      }
      console.error("Error updating users:", err);
      res.status(500).json({ message: "Failed to updated User" });
    });
};
// ✅ delete users data api
const DeleteUserData = async (req, res) => {
  try {
    const deletefName = req.params.firstName;
    if (!deletefName) {
      return res
        .status(400)
        .json({ success: false, message: "User id is required" });
    }
    const result = await DeleteUser(deletefName);
    if (res.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(201).json({
      success: true,
      message: "User delete successfully",
      data: result,
    });
  } catch (err) {
    console.error("Error delteting users:", err);
  }
};

module.exports = {
  fetchUserData,
  fetchSingleUserData,
  AddUserData,
  EditUserData,
  DeleteUserData,
};
