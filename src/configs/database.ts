import {User} from "../modules/user/entities/user.entity";
import {DataSource} from "typeorm";

export const appDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sa", // Optional for Windows Authentication
    password: "database1234", // Optional for Windows Authentication
    database: "store",
    entities: [User],
    synchronize: true,
    logging: false,
    options: {
        encrypt: false, // Set to true if you're using SSL
        trustServerCertificate: true, // This enables Windows Authentication
    }
})