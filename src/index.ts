import express, {Express} from "express";
import dotenv from "dotenv";
import {baseRoutes} from "./modules/base.routes";
import {appDataSource} from "./configs/database";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/api", baseRoutes);

app.listen(port, () => {
    appDataSource.initialize()
        .then(() => {
            // here you can start to work with your database
        })
        .catch((error) => console.log(error))
    console.log(`[server]: Server is running at http://localhost:${port}`);
});