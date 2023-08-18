const express = require("express");

const adminRouter = express.Router();

// single route and get all methods
// adminRouter
//   .route("/dashboard")
//   .all((req, res, next) => {
//     console.log(`I am logging Something...⛵ ${req.method} `);
//     next();
//   })
//   .get((req, res) => {
//     res.send("GET: 🏴󠁧󠁢󠁷󠁬󠁳󠁿 ");
//   })
//   .post((req, res) => {
//     res.send("POST: 🏷 ");
//   })
//   .put((req, res) => {
//     res.send("PUT: 🏸 ");
//   })
//   .delete((req, res) => {
//     res.send("DELETE: 🏹 ");
//   });
// _______E______N________D_________?________

module.exports = adminRouter;
