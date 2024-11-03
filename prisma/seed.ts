// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy todos
  const todo1 = await prisma.todo.upsert({
    where: { id: 'y70x128lau9habcgdx0xppsj' },
    update: {},
    create: {
      id: 'y70x128lau9habcgdx0xppsj',
      title: 'First Todo',
      completed: false,
      expiresAt: new Date('2024-12-31'),
    },
  });

  const todo2 = await prisma.todo.upsert({
    where: { id: 'fiinpvu419gvuzlpzp9w1lwe' },
    update: {},
    create: {
      id: 'fiinpvu419gvuzlpzp9w1lwe',
      title: 'Second Todo',
      completed: true,
      expiresAt: new Date('2024-12-31'),
    },
  });

  console.log({ todo1, todo2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
