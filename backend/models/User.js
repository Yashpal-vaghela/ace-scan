const db = require("../config/db");

// ✅ get User data api
const getUserData = () => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM users`;
    db.query(query, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};
// ✅ get single User data api
const singleUserData = (firstName) => {
  console.log("firstName",firstName);

  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM users WHERE first_name = ?`;
    db.query(query, [firstName], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// ✅ add User data api
const AddUser = async (first_name, last_name, email, created_at,password) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO users (first_name,last_name,email,created_at,password) VALUES(?,?,?,?,?)`;
    db.query(
      query,
      [first_name, last_name, email, created_at,password],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

// ✅ edit User data api
const EditUser = async (slug, fields) => {
  const keys = Object.keys(fields);
  const values = Object.values(fields);
  if (keys.length === 0) {
    throw new error("No fields to update");
  }
  const setCaluse = keys.map((key) => `${key} = ?`).join(", ");
  const query = `UPDATE users SET ${setCaluse} WHERE first_name = ?`;

  return new Promise((resolve, reject) => {
    db.query(query, [...values, slug], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// ✅ delete User data api
const DeleteUser = (firstName) => {
  const userfName = firstName;
  const query = "DELETE FROM users WHERE first_name = ?";

  return new Promise((resolve, reject) => {
    db.query(query, [userfName], (err, res) => {
      if (err) {
        console.error("Error deleteing user", err);
        return reject(err);
      }
      resolve(res);
    });
  });
};

module.exports = { getUserData, singleUserData, AddUser, EditUser, DeleteUser };
