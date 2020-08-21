import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

interface IRetrieverConfigApi {
    prefix: string;
    version: number;
}

interface IRetrieverConfig {
    port: number;
    databaseURI: string;
    jwtSecret: string;
    api: IRetrieverConfigApi;
}

const configObject: IRetrieverConfig = {
    port: +process.env.RETRIEVER_PORT || 3000,
    databaseURI: process.env.RETRIEVER_MONGODB_URI || '',
    jwtSecret: process.env.RETRIEVER_JWT_SECRET || '',
    api: {
        prefix: '/api',
        version: 1
    }
};

export default configObject;
