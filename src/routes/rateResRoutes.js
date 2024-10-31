import express from 'express';
import { addRateRes, rateResByUser,rateResByRes } from '../controllers/rateResControllers.js';

const rateResRoutes = express.Router();

rateResRoutes.post("/add-rate", addRateRes);
rateResRoutes.get("/rate-res-by-user/:user_id",rateResByUser);
rateResRoutes.get("/rate-res-by-res/:res_id",rateResByRes);
export default rateResRoutes;