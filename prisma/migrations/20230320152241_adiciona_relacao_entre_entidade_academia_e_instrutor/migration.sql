-- AlterTable
ALTER TABLE "instructor" ADD COLUMN     "academyId" INTEGER;

-- AddForeignKey
ALTER TABLE "instructor" ADD CONSTRAINT "instructor_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "academy"("id") ON DELETE SET NULL ON UPDATE CASCADE;
