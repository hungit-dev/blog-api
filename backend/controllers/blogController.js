const { prisma } = require("../lib/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const indexGet = async (req, res) => {
  res.json({ message: "Welcome to the Blog API!" });
};

//User controllers
const signUpPost = async (req, res) => {
  try {
    const data = req.body;
    const isExisting = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (isExisting)
      return res.status(400).json({ message: "User already exists" });
    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: await bcrypt.hash(data.password, 10),
        username: data.username,
        role: data.role,
      },
    });
    res.json({ message: "Mock user created", user });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
const loginPost = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });
    // Sign a JWT
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
    // Send token to client
    res.json({ token });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
const profileGet = async (req, res) => {
  // req.user is set by Passport JWT
  res.json({ message: "Protected data", user: req.user });
};

//Post controllers
const postGet = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const postData = await prisma.post.findUnique({ where: { id } });
    if (!postData) return res.status(404).json({ error: "Post not found" });
    return res.status(200).json(postData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
const postPost = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, content } = req.body;
    const data = {
      title,
      content,
      userId,
    };
    const postData = await prisma.post.create({ data });
    return res.status(201).json(postData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
const postDelete = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = Number(req.params.id);
    const postData = await prisma.post.findUnique({ where: { id: postId } });
    if (!postData) return res.status(404).json({ error: "Post not found" });
    if (userId != postData.userId)
      return res
        .status(403)
        .json({ message: "You do not have permission to delete this post" });
    await prisma.post.delete({ where: { id: postId } });
    return res.status(200).json({ message: "Deleted post successfully" });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
const postUpdate = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = Number(req.params.id);
    const postData = await prisma.post.findUnique({ where: { id: postId } });
    if (!postData) return res.status(404).json({ error: "Post not found" });
    if (userId != postData.userId)
      return res
        .status(403)
        .json({ message: "You do not have permission to edit this post" });
    const data = {
      title: req.body.title,
      content: req.body.content,
    };
    await prisma.post.update({
      where: { id: postId },
      data,
    });
    return res.status(200).json({ message: "Updated post successfully" });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

//Comment controllers
const commentPost = async (req, res) => {
  try {
    const userId = req.user.id;
    const postId = Number(req.params.id);
    const mockComment = "This is a mock comment.";
    const commentData = await prisma.comment.create({
      data: {
        content: mockComment,
        userId,
        postId,
      },
    });
    return res.status(201).json(commentData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
const commentUpdate = async (req, res) => {
  try {
    const userId = req.user.id;
    const commentId = Number(req.params.id);
    const commentData = await prisma.comment.findUnique({
      where: { id: commentId },
    });
    if (!commentData)
      return res.status(404).json({ error: "Comment not found" });
    if (userId != commentData.userId)
      return res
        .status(403)
        .json({ message: "You do not have permission to edit this comment" });
    const data = {
      title: req.body.title,
      content: req.body.content,
    };
    await prisma.comment.update({
      where: { id: commentId },
      data,
    });
    return res.status(200).json({ message: "Updated comment successfully" });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
const commentDelete = async (req, res) => {
  try {
    const userId = req.user.id;
    const commentId = Number(req.params.id);
    const commentData = await prisma.comment.findUnique({
      where: { id: commentId },
    });
    if (!commentData)
      return res.status(404).json({ error: "Comment not found" });
    if (userId != commentData.userId)
      return res
        .status(403)
        .json({ message: "You do not have permission to delete this comment" });
    await prisma.comment.delete({ where: { id: commentId } });
    return res.status(200).json({ message: "Deleted comment successfully" });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
module.exports = {
  signUpPost,
  loginPost,
  profileGet,
  indexGet,
  postGet,
  postPost,
  postDelete,
  postUpdate,
  commentPost,
  commentUpdate,
  commentDelete,
};
