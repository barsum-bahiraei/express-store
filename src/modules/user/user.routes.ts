import express from "express";
import {UserController} from "./user.controller";


const userRoutes = express.Router();
const controller = new UserController();

userRoutes.post('/login', controller.login)


export {userRoutes}