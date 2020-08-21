import config from './config';
import appLoader from './loaders';
import express from 'express';

async function startServer() {
    const app = express();

    if (!config.databaseURI) {
        console.error('!!!!!Database connection string is not defined!!!!!');
        process.exit(1);
        return;
    }

    await appLoader({expressApp: app});

    // @ts-ignore
    app.listen(process.env.PORT || config.port, (err: any) => {
        if (err) {
            console.error(err);
            process.exit(1);
            return;
        }

        console.log(`
        ################################################
        Server listening on port: ${config.port}
        🛡️################################################`);
    });
}

startServer();
