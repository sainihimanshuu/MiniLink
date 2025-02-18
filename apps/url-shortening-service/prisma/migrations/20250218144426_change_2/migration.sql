/*
  Warnings:

  - You are about to drop the column `ownerId` on the `ShortUrl` table. All the data in the column will be lost.
  - Added the required column `ownerMail` to the `ShortUrl` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ShortUrl" DROP CONSTRAINT "ShortUrl_ownerId_fkey";

-- AlterTable
ALTER TABLE "ShortUrl" DROP COLUMN "ownerId",
ADD COLUMN     "ownerMail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ShortUrl" ADD CONSTRAINT "ShortUrl_ownerMail_fkey" FOREIGN KEY ("ownerMail") REFERENCES "UserUrls"("email") ON DELETE CASCADE ON UPDATE CASCADE;
