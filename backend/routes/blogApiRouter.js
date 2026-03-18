const { Router } = require("express");
const blogApiRouter = Router();
const { signUpPostMock,indexGet, loginPost, profileGet } = require("../controllers/blogController");
const passport = require("passport");

blogApiRouter.get("/", indexGet);
blogApiRouter.post("/signup-mock", signUpPostMock);
blogApiRouter.post("/login", loginPost);
blogApiRouter.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  profileGet
);

module.exports = blogApiRouter;