import express, {Express, Request, Response} from "express";
import {PrismaClient} from '@prisma/client'
import dotenv from "dotenv";
import {baseRoutes} from "./modules/base.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient()


app.use(express.json());
app.use("/api", baseRoutes);
app.listen(port, () => {
    prisma.$connect();
    console.log(`[server]: Server is running at http://localhost:${port}`);
});