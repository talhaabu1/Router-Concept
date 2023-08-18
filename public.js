const e = require("express");
const express = require("express");

const publicRouter = express.Router();

// any router call this file and function call
// const log = (req, res, next) => {
//   console.log("I am logging Something !");
//   next();
// };
// publicRouter.all("*", log);
// _______E______N________D_________?________

// use param and then any routes parameter pass and the call this function
// publicRouter.param("id", (req, res, next, value) => {
//   req.id = value === "1" ? "admin" : "anonymous";
//   next();
// });
// _______E______N________D_________?________

// this is a param fuction and return fuction and advance fuction
// publicRouter.param((param, option) => (req, res, next, val) => {
//   if (val === option) {
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// });

// publicRouter.param("id", "1");
// _______E______N________D_________?________

publicRouter.get("/:id", (req, res) => {
  res.send(`hello public`);
});

publicRouter.get("/all", (req, res) => {
  res.send("public all router");
});

module.exports = publicRouter;
