import express, {Router} from 'express';
import Database from './Database'
import {Server} from "http";

export default class Application {
    public app: express.Application;

    constructor(routes: Router) {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
        (async() => await this.initializeDatabase())()
    }

    private initializeMiddlewares() : Express.Application {
        return this.app.use([express.json(), express.urlencoded({ extended: false })]);
    }

    private initializeRoutes(routes: Router) : Express.Application {
        return this.app.use(routes);
    }

    private initializeDatabase = async (): Promise<void> => {
        try {
            await Database.authenticate();
            await Database.sync();
        } catch (e) {
            console.log(`Veritabanı bağlantısı sağlanırken bir problem oluştu! ${e}`)
        }
    }

    public listen(port: string | number, callback?: () => void) : Server {
        return this.app.listen(port, callback);
    }
}