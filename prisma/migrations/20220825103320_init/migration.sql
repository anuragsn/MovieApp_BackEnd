-- CreateTable
CREATE TABLE "users" (
    "userId" SERIAL NOT NULL,
    "username" TEXT,
    "password" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "image_url" TEXT,
    "time" TEXT,
    "type" TEXT,
    "description" TEXT,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);
