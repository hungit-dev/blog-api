const { Router } = require("express");
const blogApiRouter = Router();
const { signUpPost,indexGet, loginPost, profileGet,postGet,postPost,postDelete,postUpdate,commentPost, commentUpdate, commentDelete } = require("../controllers/blogController");
const passport = require("passport");

blogApiRouter.get("/", indexGet);
//User routes
blogApiRouter.post("/signup", signUpPost);
blogApiRouter.post("/login", loginPost);
blogApiRouter.get( "/profile",passport.authenticate("jwt", { session: false }),profileGet);
//Post routes
blogApiRouter.get("/posts/:id", postGet)
blogApiRouter.post("/posts/create",passport.authenticate("jwt", { session: false }),postPost)
blogApiRouter.delete("/posts/:id/delete",passport.authenticate("jwt", { session: false }),postDelete)
blogApiRouter.put("/posts/:id/edit",passport.authenticate("jwt", { session: false }),postUpdate)
//Comment routes
blogApiRouter.post("/posts/:id/comments/create",passport.authenticate("jwt", { session: false }),commentPost)
blogApiRouter.put("/comments/:id/edit",passport.authenticate("jwt", { session: false }),commentUpdate)
blogApiRouter.delete("/comments/:id/delete",passport.authenticate("jwt", { session: false }),commentDelete)
module.exports = blogApiRouter;