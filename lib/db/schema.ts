import {pgTable , text , uuid , boolean} from "drizzle-orm/pg-core";           
import {relations} from "drizzle-orm";

export const files = pgTable("files", {
    id : uuid("id").defaultRandom().primaryKey(),

    //basic file/folder information 
    name : text("name").notNull(),
    path : text("path").notNull(),
    size:integer("size").notNull(),