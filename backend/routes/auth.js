// routes/auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
const { fetchUserData, AddUserData, EditUserData, DeleteUserData, fetchSingleUserData } = require("../controllers/UserController");
const router = express.Router();

// 🔐 Secret key for JWT
const JWT_SECRET = "cf2fda7fe7bac4f2b97316664fb39aee5c80d311e9adefa8f6b3ce047f30aa26";


// ✅ Register API
router.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
      [first_name, last_name, email, hashedPassword],
      (err, result) => {
        if (err) {
          if (err.code === "ER_DUP_ENTRY") {
            return res
              .status(400)
              .json({ message: "Email already registered" });
          }
          return res.status(500).json({ message: "Database error" });
        }

        res.status(201).json({ message: "User registered successfully" });
      }
    );
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Login API
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) return res.status(500).json({ message: "Database error" });

      if (results.length === 0) {
        return res.status(401).json({ message: "Please Register username or password" });
      }

      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ results: 'Login successful', token });
    }
  );
});

router.get("/users",fetchUserData);
router.get("/users/:firstName",fetchSingleUserData)
router.post("/users",AddUserData);
router.put("/users/:firstName",EditUserData);
router.delete("/users/:firstName",DeleteUserData)

module.exports = router;