// import { PrismaClient } from "./generated/prisma/client.js";
import { createWebClient } from "./web-client.js";

// const prisma = new PrismaClient();
const prisma = await createWebClient({ jsonSchema: "json-schema.json" });
const results = await prisma.products.findMany({
  include: {
    reviews: true,
  },
});
console.log(results);
