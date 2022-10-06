import  express  from "express";
import { CreateProduct, DeleteProduct, getParamProduct, getProducts, QueryListProducts, UpdateProduct } from "../controlles/Products.js";


const ProductRouter = express()

ProductRouter.get("/getall",getProducts)
ProductRouter.get("/search",QueryListProducts)
ProductRouter.get("/search/:id",getParamProduct)

ProductRouter.post("/create",CreateProduct)
ProductRouter.post("/update",UpdateProduct)

ProductRouter.delete("/delete",DeleteProduct)

export default ProductRouter


