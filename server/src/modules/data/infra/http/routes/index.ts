import express from 'express';
import {
    generateDataController,
    retrieveDataController
} from '../../../controllers';

const dataRouter = express.Router();

dataRouter.get('/', retrieveDataController.execute);
dataRouter.post('/generate', generateDataController.execute);

export {dataRouter};