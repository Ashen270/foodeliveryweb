import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { addToCart, getCartItems, removeItems } from '../controllers/cartController.js';


const cartRouter = express.Router();

cartRouter.post('/add', authMiddleware, addToCart);
cartRouter.post('/remove',authMiddleware, removeItems);
cartRouter.get('/get',authMiddleware, getCartItems);

export default cartRouter;