import express from 'express';
const router = express.Router();


import retreatComponent from './retreat';
import bookingComponent from './booking';


router.use('/retreats', retreatComponent);
router.use('/books', bookingComponent);



export default router;
