import express from "express";
import { getAllProducts } from "../controllers/productController";

const router = express.Router();

 router.get("/test",getAllProducts);

 router.post("/",creatProduct);


export default router;          