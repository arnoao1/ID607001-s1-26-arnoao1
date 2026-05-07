import express from 'express';
import { getAbout } from '../controllers/about.js';

const router = express.Router();

router.get('/about', getAbout);

export default router;