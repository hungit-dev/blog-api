import { prisma } from './lib/prisma.js';

async function main() {
    const newUser = await prisma.user.create(
        {
            data: {
                email:"test@example.com",
                username:"testuser",
                password:"password123",
                role: "READER"
            }
        }
    )
    console.log(newUser);
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