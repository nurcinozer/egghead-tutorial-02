import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.get("/ping", (req: Request, res: Response) => {
  res.json({ message: "hello" });
});

app.get("/products", async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();

  res.json(products);
});

const PORT = 3001;
app.listen(PORT);
console.log(`listening on http://localhost:${PORT}`);
