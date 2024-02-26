import express from "express";
import {userRoutes} from "./user/user.routes";


const baseRoutes = express.Router();

baseRoutes.use('/user', userRoutes)



export {baseRoutes}