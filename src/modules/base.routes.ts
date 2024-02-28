import express from "express";
import {userRoutes} from "./user/user.routes";
import {productRoutes} from "./product/product.routes";


const baseRoutes = express.Router();

baseRoutes.use('/user', userRoutes)
baseRoutes.use('/product' , productRoutes)


export {baseRoutes}