import { fileURLToPath } from "node:url";
import path from "node:path";
import { config } from "dotenv";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client.ts";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
config({ path: path.join(packageRoot, ".env") });

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
export const client = new PrismaClient({ adapter });
