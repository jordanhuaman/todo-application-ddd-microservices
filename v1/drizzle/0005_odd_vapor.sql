CREATE TABLE "data" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "data_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1)
);
--> statement-breakpoint
ALTER TABLE "user-management"."todo" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user-management"."todo" ADD CONSTRAINT "todo_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "user-management"."users"("id") ON DELETE no action ON UPDATE no action;