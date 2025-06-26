ALTER TABLE "tasks_activity" DROP CONSTRAINT "tasks_activity_changed_by_user_id_fk";
--> statement-breakpoint
ALTER TABLE "tasks_activity" ADD CONSTRAINT "tasks_activity_changed_by_user_id_fk" FOREIGN KEY ("changed_by") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;