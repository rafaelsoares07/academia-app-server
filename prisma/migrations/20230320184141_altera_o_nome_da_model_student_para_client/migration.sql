/*
  Warnings:

  - Added the required column `cpf` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "student" ADD COLUMN     "cpf" TEXT NOT NULL;
