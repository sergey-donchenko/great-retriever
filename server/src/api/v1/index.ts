import express from 'express'
import { dataRouter } from '../../modules/data/infra/http/routes';

const v1Router = express.Router();

v1Router.use('/data', dataRouter);

export { v1Router }