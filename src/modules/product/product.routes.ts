import express from "express";
import {ProductController} from "./product.controller";


const productRoutes = express.Router();
const controller = new ProductController();

productRoutes.get('/search', controller.search)


export {productRoutes};