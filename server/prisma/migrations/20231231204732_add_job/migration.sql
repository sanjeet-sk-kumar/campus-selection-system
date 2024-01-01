-- CreateTable
CREATE TABLE "Job" (
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

    CONSTRAINT "Job_pkey" PRIMARY KEY ("jobid")
);

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company_registration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
