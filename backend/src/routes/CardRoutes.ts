import Routes from "./Routes";
import Express from "express";
import CardController from "../controllers/CardController"

class CardRoutes extends Routes {

    private _controller: CardController;

    constructor(app: Express.Application){
        super(app, "/cards");
        this._controller = new CardController();
    }

    override initializeGetRoutes(): void {
        this._server.get(this._url, (req: Express.Request, res: Express.Response) => {
            this._controller.getCards(req.query).then(cards => {
                res.status(cards.statusCode).send(cards);
            })
        })
    }
    
    override initializePostRoutes(): void {
        this._server.post(this._url, (req: Express.Request, res: Express.Response) => {
            this._controller.createCards(req.body).then(postRes => {
                res.status(postRes.statusCode).send(postRes);
            })
        })
    }

    override initializePutRoutes(): void {
        this._server.put(this._url, (req: Express.Request, res: Express.Response) => {
            this._controller.editCards(req.body).then(putRes => {
                res.status(putRes.statusCode).send(putRes);
            })
        })
    }

    override initializeDeleteRoutes(): void {
        this._server.delete(this._url, (req: Express.Request, res: Express.Response) => {
            this._controller.deleteCards(req.query).then(deleteRes => {
                res.status(deleteRes.statusCode).send(deleteRes);
            })
        })
    }

}

export default CardRoutes;