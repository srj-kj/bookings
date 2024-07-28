import { Router, Request, Response } from 'express';
import * as controller from './retreat.controller';


const router = Router();

router.get('/', controller.getRetreats );

export default router;
