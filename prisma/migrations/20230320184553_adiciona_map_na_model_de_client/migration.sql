/*
  Warnings:

  - You are about to drop the `student` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_accessLevelId_fkey";

-- DropTable
DROP TABLE "student";

-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accessLevelId" INTEGER,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_accessLevelId_fkey" FOREIGN KEY ("accessLevelId") REFERENCES "access_level"("id") ON DELETE SET NULL ON UPDATE CASCADE;
