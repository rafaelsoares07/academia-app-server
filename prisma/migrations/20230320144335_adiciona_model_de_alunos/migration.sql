-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accessLevelId" INTEGER,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_accessLevelId_fkey" FOREIGN KEY ("accessLevelId") REFERENCES "access_level"("id") ON DELETE SET NULL ON UPDATE CASCADE;
