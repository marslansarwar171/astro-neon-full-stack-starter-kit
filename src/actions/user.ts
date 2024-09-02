import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import userTable from '../db/schema'

// This is how Astro backend actions are defined. Then, you can call these actions from frontend.
export const user = {
  //CRUD Operations for your requirements are defined here via Astro Actions [https://docs.astro.build/en/guides/actions/]
  createUser: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string(),
      age: z.number(),
    }),
    handler: async ({ name, age }) => {
      const sql = neon(import.meta.env.DATABASE_URL);
      const db = drizzle(sql);
      // Here you can perform Drizzle ORM queries [https://orm.drizzle.team/docs/select]
      await db.insert(userTable).values({ name, age }); 
    }
  }),
}