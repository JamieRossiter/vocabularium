import Routes from "./Routes";
import Express from "express";
import PackController from "../controllers/PackController";

class PackRoutes extends Routes {

    private _controller: PackController; 

    constructor(app: Express.Application){
        super(app, "/pack");
        this._controller = new PackController();
    }

    override initializeGetRoutes(): void {
        this._server.get(this._url, (req: Express.Request, res: Express.Response) => {
            this._controller.getPack(req.query).then(pack => {
                res.status(pack.responseCode).send(pack);
            })
        })
    }
    
    override initializePostRoutes(): void {
        this._server.post(this._url, (req: Express.Request, res: Express.Response) => {
            this._controller.createPack(req.body).then(postRes => {
                res.status(postRes.responseCode).send(postRes);
            })
        })
    }

    override initializePutRoutes(): void {
        this._server.put(this._url, (req: Express.Request, res: Express.Response) => {
            this._controller.editPack(req.body).then(putRes => {
                res.status(putRes.responseCode).send(putRes);
            })
        })
    }

    override initializeDeleteRoutes(): void {
        this._server.put(this._url, (req: Express.Request, response: Express.Response) => {
            console.log("Successful Delete!");
        })
    }

}

export default PackRoutes;