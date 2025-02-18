/*
  Warnings:

  - You are about to drop the `Email` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ShortUrl" DROP CONSTRAINT "ShortUrl_ownerId_fkey";

-- DropTable
DROP TABLE "Email";

-- CreateTable
CREATE TABLE "UserUrls" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "UserUrls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserUrls_email_key" ON "UserUrls"("email");

-- AddForeignKey
ALTER TABLE "ShortUrl" ADD CONSTRAINT "ShortUrl_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "UserUrls"("id") ON DELETE CASCADE ON UPDATE CASCADE;
