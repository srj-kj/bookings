import { Router, Request, Response } from 'express';
import * as controller from './booking.contoller';


const router = Router();

router.post('/', controller.addBookings );

export default router;
