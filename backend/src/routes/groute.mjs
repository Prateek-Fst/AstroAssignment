import express from 'express';
import { addGuru , assignSeeker, toggleTopGuru} from '../controllers/gcontroller.mjs';
const router = express.Router();
router.post('/addGuru', addGuru);
router.post('/assignSeeker', assignSeeker);
router.put('/toggleTopGuru/:guruId', toggleTopGuru);

export default router;