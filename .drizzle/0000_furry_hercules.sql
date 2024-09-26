CREATE TABLE IF NOT EXISTS "pqrs_usuarios" (
	"id" uuid PRIMARY KEY NOT NULL,
	"nombre" text NOT NULL,
	"ciudad" text NOT NULL,
	"profesion" text NOT NULL,
	"celular" integer NOT NULL,
	"correo" text NOT NULL,
	"pqrsContenido" varchar(400) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
