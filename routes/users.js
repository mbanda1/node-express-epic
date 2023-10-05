import express from 'express'
import { getSingleUser, getManyUsers, addOneUser, getOneFromDbById } from '../controllers/users.js';

const router = express.Router();

router.get('/', getManyUsers);
router.get('/:id', getSingleUser);
router.post('/', addOneUser);
router.get('/db/:id', getOneFromDbById);

export default router;
