CREATE TABLE "tasks" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"status" "status" DEFAULT 'IDEA' NOT NULL,
	"priority" "priority" DEFAULT 'NONE' NOT NULL,
	"userId" text NOT NULL,
	"due_date" timestamp,
	"created_at" timestamp (3) NOT NULL,
	"updated_at" timestamp (3) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "subtasks" DROP CONSTRAINT "subtasks_projectId_project_id_fk";
--> statement-breakpoint
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_userId_project_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."project"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subtasks" ADD CONSTRAINT "subtasks_projectId_tasks_id_fk" FOREIGN KEY ("projectId") REFERENCES "public"."tasks"("id") ON DELETE cascade ON UPDATE no action;