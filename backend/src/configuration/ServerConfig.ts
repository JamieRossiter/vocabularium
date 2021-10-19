import Express from "express";

class ServerConfiguration {

    private _app: Express.Application;
    private _port: number;

    constructor(){
        this._app = Express();
        this._port = 5000;
    }

    get app(): Express.Application {
        return this._app;
    }

    get port(): number {
        return this._port;
    }

}

export default ServerConfiguration;