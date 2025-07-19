CREATE SCHEMA IF NOT EXISTS "event-source";

CREATE TABLE "event-source"."events" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updateAt" timestamp
);
