import { PrismaService } from "./service/prisma.service"


const prisma = new PrismaService();

async function seed() {
  await prisma.tasks.createMany({
    data: [
      {
        name: 'Task 1',
        cost: 100.0,
        dueDate: '15/01/2024',
        presentationOrder: 1,
      },
      {
        name: 'Task 2',
        cost: 200.5,
        dueDate: '20/02/2024',
        presentationOrder: 2,
      },
      {
        name: 'Task 3',
        cost: 150.75,
        dueDate: '10/03/2024',
        presentationOrder: 3,
      },
      {
        name: 'Task 4',
        cost: 250.0,
        dueDate: '05/04/2024',
        presentationOrder: 4,
      },
      {
        name: 'Task 5',
        cost: 300.25,
        dueDate: '25/05/2024',
        presentationOrder: 5,
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded");
  prisma.$disconnect();
});