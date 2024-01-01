-- CreateTable
CREATE TABLE "company_registration" (
    "id" SERIAL NOT NULL,
    "company_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT,
    "state" TEXT,
    "pincode" TEXT,
    "contact_person_name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "contact_no" TEXT,
    "email_id" TEXT,
    "website" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "company_registration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "company_registration_username_key" ON "company_registration"("username");
