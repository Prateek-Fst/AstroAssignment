import express from 'express';
import { createSeeker } from '../controllers/usercontroller.mjs';
const router = express.Router();
router.post('/createSeeker', createSeeker);
export default router;