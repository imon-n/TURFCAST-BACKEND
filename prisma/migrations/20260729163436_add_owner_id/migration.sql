/*
  Warnings:

  - Added the required column `ownerId` to the `Turf` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Turf" ADD COLUMN     "ownerId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Turf_ownerId_idx" ON "Turf"("ownerId");
