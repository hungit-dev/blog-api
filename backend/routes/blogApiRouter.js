const { Router } = require("express");
const blogApiRouter = Router();
const {
  signUpPost,
  indexGet,
  loginPost,
  profileGet,
  postsGet,
  userPostsGet,
  userPostGet,
  postGet,
  userPostPost,
  userPostDelete,
  userPostUpdate,
  userCommentPost,
  userCommentUpdate,
  userCommentDelete,
} = require("../controllers/blogController");
const passport = require("passport");

blogApiRouter.get("/", indexGet);
//User routes
blogApiRouter.post("/signup", signUpPost);
blogApiRouter.post("/login", loginPost);
blogApiRouter.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  profileGet,
);
//Post routes
blogApiRouter.get("/posts", postsGet);
blogApiRouter.get(
  "/posts/me",
  passport.authenticate("jwt", { session: false }),
  userPostsGet,
);
blogApiRouter.get(
  "/posts/me/:id",
  passport.authenticate("jwt", { session: false }),
  userPostGet,
);
blogApiRouter.get("/posts/:id", postGet);
blogApiRouter.post(
  "/posts/me/create",
  passport.authenticate("jwt", { session: false }),
  userPostPost,
);
blogApiRouter.delete(
  "/posts/me/:id/delete",
  passport.authenticate("jwt", { session: false }),
  userPostDelete,
);
blogApiRouter.put(
  "/posts/me/:id/edit",
  passport.authenticate("jwt", { session: false }),
  userPostUpdate,
);
//Comment routes
blogApiRouter.post(
  "/posts/:id/comments/me/create",
  passport.authenticate("jwt", { session: false }),
  userCommentPost,
);
blogApiRouter.put(
  "/comments/me/:id/edit",
  passport.authenticate("jwt", { session: false }),
  userCommentUpdate,
);
blogApiRouter.delete(
  "/comments/me/:id/delete",
  passport.authenticate("jwt", { session: false }),
  userCommentDelete,
);
module.exports = blogApiRouter;
