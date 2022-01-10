import Routes from "./Routes";
import Express from "express";
import PackController from "../controllers/PackController";

class PackRoutes extends Routes {

    private _controller: PackController; 

    constructor(app: Express.Application){
        super(app, "/packs");
        this._controller = new PackController();
    }

    override initializeGetRoutes(): void {
        this._server.get(this._url, (req: Express.Request, response: Express.Response) => {
            this._controller.getPack(req.query).then(pack => {
                console.log(pack);
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