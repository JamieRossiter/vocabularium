import Routes from "./Routes";
import Express from "express";
import CardController from "../controllers/CardController"
import { Cards } from "../utils/Cards";

class CardRoutes extends Routes {

    private _controller: CardController;

    constructor(app: Express.Application){
        super(app, "/cards");
        this._controller = new CardController();
    }

    override initializeGetRoutes(): void {
        this._server.get(this._url, (req: Express.Request, res: Express.Response) => {
            this._controller.getCards(req.query).then(cards => {
                res.status(cards.responseCode).send(cards);
            })
        })
    }
    
    override initializePostRoutes(): void {
        this._server.post(this._url, (req: Express.Request, res: Express.Response) => {
            this._controller.createCards(req.body).then(postRes => {
                res.status(postRes.responseCode).send(postRes);
            })
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