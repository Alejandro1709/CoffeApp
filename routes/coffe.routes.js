import express from 'express';
import { getAllCoffees } from '../controllers/coffe.controller';
const router = express.Router();

router.get('/', getAllCoffees);

export default router;
