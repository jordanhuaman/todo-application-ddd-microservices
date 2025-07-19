CREATE TABLE "user-management"."todo" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar(500) NOT NULL,
	"createAt" timestamp DEFAULT now(),
	"updateAt" timestamp
);
