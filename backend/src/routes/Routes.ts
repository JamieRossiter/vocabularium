import Express from "express";

abstract class Routes {

    protected _server: Express.Application;
    protected _url: string;

    constructor(server: Express.Application, url: string){
        this._server = server;
        this._url = url;
        this.initializeAllRoutes();
    }

    private initializeAllRoutes(): void {
        this.initializeGetRoutes();
        this.initializePostRoutes();
        this.initializePutRoutes();
        this.initializeDeleteRoutes();
    }

    abstract initializeGetRoutes(): void

    abstract initializePostRoutes(): void

    abstract initializePutRoutes(): void

    abstract initializeDeleteRoutes(): void

}

export default Routes;