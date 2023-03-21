-- CreateTable
CREATE TABLE "instructor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "accessLevelId" INTEGER,

    CONSTRAINT "instructor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "instructor" ADD CONSTRAINT "instructor_accessLevelId_fkey" FOREIGN KEY ("accessLevelId") REFERENCES "access_level"("id") ON DELETE SET NULL ON UPDATE CASCADE;
