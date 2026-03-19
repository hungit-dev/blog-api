require("dotenv").config({ path: "../.env" });
const { prisma } = require('./lib/prisma');
async function main() {

  const post = await prisma.post.create({
    data:{
      title: "My First Post",
      content: "This is the content of my first post.",
      published: true,
      userId: 1,
    }
  })
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });