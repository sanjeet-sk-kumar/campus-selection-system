/*
  Warnings:

  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_companyId_fkey";

-- DropTable
DROP TABLE "Job";

-- CreateTable
CREATE TABLE "job" (
    "jobid" SERIAL NOT NULL,
    "companyId" INTEGER NOT NULL,
    "jobCategory" TEXT NOT NULL,
    "requiredSkill" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "minQualification" TEXT NOT NULL,
    "extraSkill" TEXT NOT NULL,
    "maxAge" INTEGER NOT NULL,
    "expectedSalary" DOUBLE PRECISION NOT NULL,
    "jobLocation" TEXT NOT NULL,
    "workingHour" TEXT NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "lastApplyDate" TIMESTAMP(3) NOT NULL,
    "entryDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_pkey" PRIMARY KEY ("jobid")
);

-- AddForeignKey
ALTER TABLE "job" ADD CONSTRAINT "job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company_registration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
