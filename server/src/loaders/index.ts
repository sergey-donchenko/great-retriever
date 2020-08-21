import expressLoader from './express';
import express from 'express';
import config from '../config';
import { MongoDBUtils } from '../utils/MongoDBUtils';

interface IBookLoader {
    expressApp: express.Application;
}

export default async ({ expressApp }: IBookLoader) => {
    await MongoDBUtils.connect(config.databaseURI);
    console.log('✌️ DB loaded and connected.');

    await expressLoader({ app: expressApp });
    console.log('✌️ Express loaded.');
}