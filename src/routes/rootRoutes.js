import express from 'express';
import likeResRoutes from './likeResRoutes.js'
import rateResRoutes from './rateResRoutes.js'
import orderRoutes from './orderRoutes.js';

const rootRoutes = express.Router();
rootRoutes.use(likeResRoutes);
rootRoutes.use(rateResRoutes);
rootRoutes.use(orderRoutes);

export default rootRoutes;
