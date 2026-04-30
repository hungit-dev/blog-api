require("dotenv").config({ path: "../.env" });
require("./passport-auth-config"); //register passport jwt strategy
const express = require("express");
const session = require("express-session");
const path = require("node:path");
const blogApiRouter = require("./routes/blogApiRouter");

const passport = require("./passport-auth-config");

const app = express();

/*read form submissions and use it values*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//initialize passport
app.use(passport.initialize());

//use router
app.use("/", blogApiRouter);

//set the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting the server:", error);
    throw error;
  }
  console.log(`Server running on port ${PORT}`);
});
