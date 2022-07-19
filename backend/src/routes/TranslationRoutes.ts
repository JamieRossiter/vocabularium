import Routes from "./Routes";
import Express from "express";
import TranslationController from "../controllers/TranslationController";

class TranslationRoutes extends Routes {

    private _controller: TranslationController;

    constructor(app: Express.Application){
        super(app, "/translate");
        this._controller = new TranslationController();
    }

    override initializeGetRoutes(): void {
        this._server.get(this._url, (req: Express.Request, res: Express.Response) => {
            this._controller.translate(req.query).then(translation => {
                res.status(translation.statusCode).send(translation);
            });
        })
    }

    override initializePostRoutes(): void {}

    override initializePutRoutes(): void {}

    override initializeDeleteRoutes(): void {}

}

export default TranslationRoutes;