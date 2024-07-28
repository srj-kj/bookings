import express from 'express';
const router = express.Router();


import retreatComponent from './retreat';
import bookingComponent from './booking';


router.use('/retreat', retreatComponent);
router.use('/booking', bookingComponent);



export default router;
