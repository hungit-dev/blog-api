require("dotenv").config();
const { prisma } = require("./lib/prisma");
const bcrypt = require("bcryptjs");

async function main() {
  const newPassword = "NewPassword123";
  const hashed = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { email: "mock@example.com" },
    data: { password: hashed },
  });

  console.log("Password updated.");
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
