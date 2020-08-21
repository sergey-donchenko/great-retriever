import mongoose from 'mongoose';
import mongodb = require('mongodb');

// eslint-disable-next-line shopify/no-fully-static-classes
export class MongoDBUtils {

    public static async connect(connectionURI: string): Promise<mongodb.Db> {
        const connect = () => {
            // @ts-ignore
            return mongoose
                .connect(connectionURI, {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useUnifiedTopology: true
                })
                .then(dbIdent => dbIdent.connection.db)
                .catch((error) => {
                    console.log('Error connecting to database: ', error);
                    return process.exit(1);
                });
        };

        const connection = await connect();

        mongoose.connection.on('disconnected', connect);

        return connection;
    }
}
