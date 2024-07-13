import express from "express";

const app = express();

app.listen(2020, () => {
  console.log("Server is running on port 2020!");
});
