import Routes from "./Routes";
import Express from "express";

class PackRoutes extends Routes {

    constructor(app: Express.Application){
        super(app, "/packs");
    }

    override initializeGetRoutes(): void {
        this._server.get(this._url, (req: Express.Request, response: Express.Response) => {
            console.log("Successful Get!");
        })
    }
    
    override initializePostRoutes(): void {
        this._server.post(this._url, (req: Express.Request, response: Express.Response) => {
            console.log("Successful Post!");
        })
    }

    override initializePutRoutes(): void {
        this._server.put(this._url, (req: Express.Request, response: Express.Response) => {
            console.log("Successful Put!");
        })
    }

    override initializeDeleteRoutes(): void {
        this._server.put(this._url, (req: Express.Request, response: Express.Response) => {
            console.log("Successful Delete!");
        })
    }

}

export default PackRoutes;