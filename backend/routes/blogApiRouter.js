const { Router } = require("express");
const blogApiRouter = Router();

blogApiRouter.get("/", (req, res) => {
res.json({ message: "Welcome to the Blog API!" });
});

module.exports = blogApiRouter;