CREATE TABLE "tasks_activity" (
	"id" text PRIMARY KEY NOT NULL,
	"status" "status" DEFAULT 'IDEA' NOT NULL,
	"task_id" text NOT NULL,
	"changed_by" text NOT NULL,
	"changed_at" timestamp (3) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "tasks_activity" ADD CONSTRAINT "tasks_activity_task_id_tasks_id_fk" FOREIGN KEY ("task_id") REFERENCES "public"."tasks"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tasks_activity" ADD CONSTRAINT "tasks_activity_changed_by_user_id_fk" FOREIGN KEY ("changed_by") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;