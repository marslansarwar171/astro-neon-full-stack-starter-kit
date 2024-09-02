// This is an example schema. You can create your own. [https://orm.drizzle.team/docs/overview]
import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

const userTable = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    age: integer('age').notNull(),
  });

export default userTable;