-- AlterTable
ALTER TABLE "academy" ADD COLUMN     "accessLevelId" INTEGER;

-- CreateTable
CREATE TABLE "access_level" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "access_level_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "access_level_name_key" ON "access_level"("name");

-- AddForeignKey
ALTER TABLE "academy" ADD CONSTRAINT "academy_accessLevelId_fkey" FOREIGN KEY ("accessLevelId") REFERENCES "access_level"("id") ON DELETE SET NULL ON UPDATE CASCADE;
