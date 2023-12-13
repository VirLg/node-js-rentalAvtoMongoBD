import { Router } from 'express';
import { getAllCars } from '../controllers/cars-controller.js';

const router = Router();

router.get('/', getAllCars);

export default router;
