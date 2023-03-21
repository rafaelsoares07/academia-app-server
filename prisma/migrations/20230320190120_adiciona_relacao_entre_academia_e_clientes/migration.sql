-- AlterTable
ALTER TABLE "client" ADD COLUMN     "academyId" INTEGER;

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "academy"("id") ON DELETE SET NULL ON UPDATE CASCADE;
