import express, { Express, Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient()

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    prisma.$connect();
    console.log(`[server]: Server is running at http://localhost:${port}`);
});