import * as express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { v1Router } from '../api/v1';
import config from '../config';

interface IBookExpressLoader {
    app: express.Application;
}

export default ({ app }: IBookExpressLoader) => {
    app.enable('trust proxy');
    app.use(cors());
    app.use(bodyParser.json());

    app.use(`${config.api.prefix}/v${config.api.version}`, v1Router);
    app.use(
        (
            err: any,
            req: express.Request,
            res: express.Response,
            next: express.NextFunction
        ) => {
            res.status(err.status || 500);
            res.json({errors: {message: err.message}});
        }
    );
};
