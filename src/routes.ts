import { Router } from "express";
import { Request, Response } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { FilterProductController } from "./controllers/product/FilterProductController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { DeleteOrderController } from "./controllers/order/DeleteOrderService";
import { AddNewItemController } from "./controllers/item/AddNewItemController";
import { RemoveItemController } from "./controllers/item/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { DeleteProductController } from "./controllers/product/DeleteProductController";
import { WelcomeController } from "./controllers/Welcome";
import DeleteCategoryController from "./controllers/category/DeleteCategoryController";

const router = Router()

router.get('/', new WelcomeController().handle)

// user Routes  

// Create new user
router.post('/users', new CreateUserController().handle)
// Auth
router.post('/session', new AuthUserController().handle)
// Get user info
router.get('/me', isAuthenticated,  new DetailUserController().handle)


// category routes

// create category
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
// list categories
router.get('/category', isAuthenticated, new ListCategoryController().handle)
// delete category
router.delete('/category', isAuthenticated, new DeleteCategoryController().handle)



// product routes

// create new product
router.post('/product',isAuthenticated, new CreateProductController().handle)
// filter product by category
router.get('/product', isAuthenticated, new FilterProductController().handle)
// delete product
router.delete('/product', isAuthenticated, new DeleteProductController().handle)



// order routes

// create new order
router.post('/order', isAuthenticated, new CreateOrderController().handle)
// delete order
router.delete('/order', isAuthenticated, new DeleteOrderController().handle)
// send order
router.put('/order', isAuthenticated, new SendOrderController().handle)
// list orders
router.get('/order', isAuthenticated, new ListOrdersController().handle)
// get order detail
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)
// finish order
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)


// item routes

// create new item
router.post('/item', isAuthenticated, new AddNewItemController().handle)
router.delete('/item', isAuthenticated, new RemoveItemController().handle)



export { router }