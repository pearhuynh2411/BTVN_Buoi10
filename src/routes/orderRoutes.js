import express from 'express';
import { orderByUser } from '../controllers/orderControllers.js';

const orderRoutes = express.Router();

orderRoutes.post("/order-by-user",orderByUser)

export default orderRoutes;