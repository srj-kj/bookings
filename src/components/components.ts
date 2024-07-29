import express from 'express';
const router = express.Router();


import retreatComponent from './retreat';
import bookingComponent from './booking';


router.use('/retreats', retreatComponent);
router.use('/book', bookingComponent);



export default router;
