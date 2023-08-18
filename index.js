const express = require("express");
const adminRouter = require("./admin");
const publicRouter = require("./public");

const app = express();
const prot = 3000;

app.use("/admin", adminRouter);
app.use("/", publicRouter);

app.listen(prot, () => {
  console.log(`Server is running on port ${prot}`);
});
