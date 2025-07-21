ALTER TABLE "user-management"."todo" DROP CONSTRAINT "todo_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "user-management"."todo" ALTER COLUMN "user_id" DROP NOT NULL;