require("dotenv").config();
require("./passport-auth-config"); //register passport jwt strategy
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const path = require("node:path");
const blogApiRouter = require("./routes/blogApiRouter");

const passport = require("./passport-auth-config");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

/*read form submissions and use it values*/
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
