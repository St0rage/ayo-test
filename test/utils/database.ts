import { config } from "dotenv";
import { Pool } from "pg";

config();

export const db = new Pool({
  host: process.env.DB_HOST as string | "localhost",
  port: Number(process.env.DB_PORT) | 5432,
  database: process.env.DB_DATABASE as string | "postgres",
  user: process.env.DB_USER as string | "postgres",
  password: process.env.DB_PASSWORD as string | "pass",
});
