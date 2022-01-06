import Routes from "./Routes";
import Express from "express";

// Replace this with a service or controller layer (can't remember which one)
import CardDAO from "../dao/CardDAO";

class CardRoutes extends Routes {

    private _dao: CardDAO;

    constructor(app: Express.Application){
        super(app, "/cards");
        this._dao = new CardDAO(); // This needs to be replaced with a service layer or controller layer
    }

    override initializeGetRoutes(): void {
        this._server.get(this._url, (req: Express.Request, response: Express.Response) => {
            this._dao.getCards("18736").then(cards => {
                console.log(cards); // This currently returns successfully. Pass req.query through to a service or controller layer and let them handle all the necessary checks.
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

export default CardRoutes;