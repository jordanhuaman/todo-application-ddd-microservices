CREATE SCHEMA "event-source";
--> statement-breakpoint
CREATE SCHEMA "user-management";
--> statement-breakpoint
CREATE TABLE "event-source"."events" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updateAt" timestamp
);
--> statement-breakpoint
CREATE TABLE "user-management"."group_member" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "user-management"."group_member_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"group_id" uuid NOT NULL,
	"memberId" varchar(255) NOT NULL,
	"memberInvitationStatus" varchar(20) DEFAULT 'PENDING' NOT NULL,
	"role" varchar(20) DEFAULT 'MEMBER' NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE "user-management"."history_note" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "user-management"."history_note_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"todo_id" uuid NOT NULL,
	"initialState" varchar(20) NOT NULL,
	"finalState" varchar(20) NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	"user_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user-management"."todo" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar(500) NOT NULL,
	"user_id" uuid NOT NULL,
	"date" date NOT NULL,
	"time" time NOT NULL,
	"state" varchar(20) DEFAULT 'SCHEDULED' NOT NULL,
	"completePercentage" real DEFAULT 0 NOT NULL,
	"createAt" timestamp DEFAULT now(),
	"updateAt" timestamp
);
--> statement-breakpoint
CREATE TABLE "user-management"."todo_group" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar(500) NOT NULL,
	"user_id" uuid NOT NULL,
	"createAt" timestamp DEFAULT now(),
	"updateAt" timestamp
);
--> statement-breakpoint
CREATE TABLE "user-management"."users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"email" varchar(255) NOT NULL,
	"gender" varchar(10) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
