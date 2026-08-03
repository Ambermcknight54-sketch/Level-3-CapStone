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

// results = await prisma.products.findMany({
//   include: {
//     products: true,
//     user: true,
//   },
// });

// console.log(JSON.stringify(results, null, 2));

// results = await prisma.products.findMany({
//   include: {
//     reviews: true,
//   },
// });

// console.log(results);

// const prisma = await createWebClient({ jsonSchema: "json-schema.json" });
// const results = await prisma.products.findMany();
// console.log(results);

// const prisma = new PrismaClient({ jsonSchema: "json-schema.json" });

// let results;
// results = await prisma.products.create({
//   data: {
//     name: "pants",
//     src: "https://media.bergdorfgoodman.com/f_auto,q_auto:low,ar_5:7,c_fill,dpr_2.0,w_375/01/bg_4145906_100419_m",
//     price: 298.0,
//   },
// });

// results = await prisma.products.create({
//   data: {
//     name: "shirt",
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTSFD5WY8p8ddGHY3Bre9dnUH5ZtahpxWZrmrkwTalkA&s=10",
//     price: "34.00",
//   },
// });

// results = await prisma.products.create({
//   data: {
//     name: "candy",
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7PRkDy9aX70IYLwe7Wq3QkQ3pChuRsGr1QShMb2wRQ&s=10",
//     price: "13.45",
//   },
// });

// results = prisma.products.create({
//   data: {
//     name: "comforter",
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9JjJS0SHwvjhEw7rN8AFncQohSSHgqFFEzgUcaN83Q&s=10",
//     price: "1109.00",
//   },
// });

// console.log(results);
