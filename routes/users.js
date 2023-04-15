import express from 'express'
import { getSingleUser, getManyUsers, addOneUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getManyUsers);
router.get('/:id', getSingleUser);
router.post('/', addOneUser);

export default router;
