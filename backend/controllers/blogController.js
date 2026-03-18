const {prisma}=require("../lib/prisma")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET

const indexGet=async(req,res)=>{
    res.json({ message: "Welcome to the Blog API!" });
}

const signUpPostMock=async(req,res)=>{
    const mockUser={
        email:"mock@example.com",
        username:"mockUser",
        password:await bcrypt.hash("password123",10),
    }
    const isExisting=await prisma.user.findUnique({where:{email:mockUser.email}})
    if(isExisting) return res.status(400).json({message:"Mock user already exists"})
    const user=await prisma.user.create({data:mockUser})
    res.json({ message: "Mock user created", user });
}

const loginPost=async (req,res)=>{
     const mockUser={
        email:"mock@example.com",
        username:"mockUser",
        password:"password123",
    }
    const { email, password } = mockUser;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });
    // Sign a JWT
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
    // Send token to client
    res.json({ token });
}

const profileGet=async(req,res)=>{
      // req.user is set by Passport JWT
    res.json({ message: "Protected data", user: req.user });
}
module.exports={signUpPostMock,loginPost,profileGet,indexGet}