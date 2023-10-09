import express from "express";
import db from "./src/config/db.js";
import mainRouter from "./src/main.route.js";
import blogCategoryRelModel from "./src/model/blogCategoryRel.model.js";

const PORT = 8080;
const app = express();
db();

app.use(express.json());

app.use("/api", mainRouter);

app.use((err, req, res, next) => {
  res.status(400).send({
    success: false,
    message: err?.message || " Something went wrong.",
  });
});

app.listen(PORT, async () => {
  console.log("express server is running", PORT);
  // console.log(await blogCategoryRelModel.find().populate(["blog", "category"]));
});


