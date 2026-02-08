import express from "express";
import { getAllProducts, creatProduct} from "../controllers/productController";

const router = express.Router();

 router.get("/test",getAllProducts);S
 router.post("/",creatProduct);
 


export default router;          