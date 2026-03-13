require("dotenv").config();
const express = require("express");
const session = require("express-session");
const path = require("node:path");

const app = express();
//use router
const blogApiRouter = require("./routes/blogApiRouter");
app.use("/", blogApiRouter);

//set the port
const PORT=process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
    throw error; 
  }
  console.log(`Server running on port ${PORT}`);
});