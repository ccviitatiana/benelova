import { integer, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const chats = pgTable('pqrs_usuarios', {
    id: uuid('id').primaryKey(),
    nombre: text('nombre').notNull(),
    ciudad: text('ciudad').notNull(),
    profesion: text('profesion').notNull(),
    celular: integer('celular').notNull(),
    correo: text('correo').notNull(),
    pqrsContenido: varchar('pqrsContenido', { length: 400 }).notNull(),
    creado: timestamp('created_at').notNull().defaultNow(),
});