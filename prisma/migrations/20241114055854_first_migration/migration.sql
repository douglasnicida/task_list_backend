-- CreateTable
CREATE TABLE "Tasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cost" REAL NOT NULL,
    "dueDate" TEXT NOT NULL,
    "presentationOrder" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tasks_name_key" ON "Tasks"("name");
