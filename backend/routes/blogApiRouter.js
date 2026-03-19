const { Router } = require("express");
const blogApiRouter = Router();
const { signUpPostMock,indexGet, loginPost, profileGet,postGet,postPost,postDelete,postUpdate } = require("../controllers/blogController");
const passport = require("passport");

blogApiRouter.get("/", indexGet);
//User routes
blogApiRouter.post("/signup-mock", signUpPostMock);
blogApiRouter.post("/login", loginPost);
blogApiRouter.get( "/profile",passport.authenticate("jwt", { session: false }),profileGet);
//Post routes
blogApiRouter.get("/posts/:id", postGet)
blogApiRouter.post("/posts/create",passport.authenticate("jwt", { session: false }),postPost)
blogApiRouter.delete("/posts/:id/delete",passport.authenticate("jwt", { session: false }),postDelete)
blogApiRouter.put("/posts/:id/edit",passport.authenticate("jwt", { session: false }),postUpdate)
module.exports = blogApiRouter;