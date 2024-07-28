import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import { connectMongo } from './mongo';
import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../utils/swagger.json';

export const config = async (app: express.Application) => {
  app.use(cors());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

  await connectMongo();
};
