import Routes from "./Routes";
import Express from "express";
import PackDAO from "../dao/PackDAO";

class PackRoutes extends Routes {

    private _dao: PackDAO; 

    constructor(app: Express.Application){
        super(app, "/packs");
        this._dao = new PackDAO();
    }

    override initializeGetRoutes(): void {
        this._server.get(this._url, (req: Express.Request, response: Express.Response) => {
            this._dao.getPack("18736").then(pack => {
                console.log(pack); // This also returns successfully. Pass req.query through to a service or controller layer and let them handle all the necessary checks.
            })
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