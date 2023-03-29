-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_username_key" ON "Person"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Person_location_key" ON "Person"("location");
