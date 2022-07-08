import Controller from "./Controller";
import CardDAO from "../dao/CardDAO";
import ServerResponse from "../utils/ServerResponse";
import RequestActions from "../utils/RequestActions";
import HTTPStatusCodes from "../utils/HTTPStatusCodes";
import { Cards } from "../utils/Cards";
import { InsertOneResult, UpdateResult } from "mongodb";
import { response } from "express";

class CardController extends Controller {

    private _dao: CardDAO = new CardDAO()

    constructor(){
        super();
    }

    public async getCards(req: any): Promise<ServerResponse>{

        let status: number = HTTPStatusCodes.Success;
        let message: string;
        let error: boolean = false;

        // Connect to the database
        return this._dao.connectToDb().then((connected: boolean) => {

            // Sanitise data
            if(!connected){
                status = HTTPStatusCodes.ServerError;
                message = "There was a fatal error with the database.";
                error = true;
            }
            if(!this.requestContainsId(req)){
                status = HTTPStatusCodes.BadRequest;
                message = "Request does not contain a 'packId' query parameter.";
                error = true;
            } else {
                if(!this.requestHasValidId(req)){
                    status = HTTPStatusCodes.BadRequest;
                    message = "Request does not contain a valid 'packId' query parameter.";
                    error = true;
                }
            }

            // Run if data is invalid
            if(error){
                return new Promise((resolve, reject) => {
                    resolve(this.createHTTPResponse(status, message));
                    reject(new Error(`Error resolving promise pertaining to following response: ${message}`));
                })
            }

            // Run if data is valid
            return this._dao.findCardsByPackId(req.packId).then((response: object | null | Error) => {
                if(!response){
                    status = HTTPStatusCodes.NotFound;
                    message = `No match found for Cards with Pack ID: ${req.packId}`
                } else {
                    message = JSON.stringify(response);
                } 
                return this.createHTTPResponse(status, message);
            })     
        })

    }

    public async createCards(req: any): Promise<ServerResponse> {
        let status: number = HTTPStatusCodes.Success;
        let message: string;
        let error: boolean = false;

        return this._dao.connectToDb().then((connected: boolean) => {

            // Sanitise data
            const validatedBody: { valid: boolean, message: Array<string> } = this.isCreateBodyValid(req);
            if(!validatedBody.valid){
                status = HTTPStatusCodes.BadRequest;
                message = validatedBody.message.toString();
                error = true;
            }
            if(!connected){
                status = HTTPStatusCodes.ServerError;
                message = "There was a fatal error with the database.";
                error = true;
            }
            if(!this.requestContainsCardsData(req)){ // Note: When refactoring, be aware that this is a unique sanitisation method for Cards
                status = HTTPStatusCodes.BadRequest;
                message = "Request does not contain card data.";
                error = true;
            }
            if(!this.requestContainsId(req)){
                status = HTTPStatusCodes.BadRequest;
                message = "Request does not contain a 'packId' body parameter.";
                error = true;
            } else {
                if(!this.requestHasValidId(req)){
                    status = HTTPStatusCodes.BadRequest;
                    message = "Request does not contain a valid 'packId' query parameter.";
                    error = true;
                }
            }

            // Run if the data is invalid
            if(error){
                return new Promise((resolve, reject) => {
                    resolve(this.createHTTPResponse(status, message));
                    reject(new Error(`Error resolving promise pertaining to following response: ${message}`));
                })
            }

            // Run if data is valid
            return this._dao.insertCardsByData(req).then((response: InsertOneResult | Error) => {
                if(!(response as InsertOneResult).acknowledged){
                    status = HTTPStatusCodes.ServerError;
                    message = `Could not insert document: ${req} due to a database error.`
                } else {
                    message = JSON.stringify(req);
                }
                return this.createHTTPResponse(status, message);
            }) 
        })
    }

    public async editCards(req: any): Promise<ServerResponse> {

        let status: number = HTTPStatusCodes.Success;
        let message: string;
        let error: boolean = false;

        return this._dao.connectToDb().then((connected: boolean) => {

            // Sanitise data
            const validatedBody: boolean = this.isEditBodyValid(req);
            if(!validatedBody){
                status = HTTPStatusCodes.BadRequest;
                message = "Request does not contain a valid body."
                error = true;
            }
            if(!connected){
                status = HTTPStatusCodes.ServerError;
                message = "There was a fatal error with the database.";
                error = true;
            }
            if(!this.requestContainsId(req)){
                status = HTTPStatusCodes.BadRequest;
                message = "Request does not contain a 'packId' body parameter.";
                error = true;
            } else {
                if(!this.requestHasValidId(req)){
                    status = HTTPStatusCodes.BadRequest;
                    message = "Request does not contain a valid 'packId' query parameter.";
                    error = true;
                }
            }

            // Run if the data is invalid
            if(error){
                return new Promise((resolve, reject) => {
                    resolve(this.createHTTPResponse(status, message));
                    reject(new Error(`Error resolving promise pertaining to following response: ${message}`));
                })
            }   

            // Run if data is valid
            return this._dao.editCardsByData(req).then((response: UpdateResult | Error) => {
                if(!(response as UpdateResult).acknowledged){
                    status = HTTPStatusCodes.ServerError;
                    message = `Could not update document: ${req} due to a database error.`
                } else {
                    message = JSON.stringify(req);
                }
                return this.createHTTPResponse(status, message);
            }) 

        })
    }

    public async deleteCards(req: any): Promise<ServerResponse> {

        let status: number = HTTPStatusCodes.Success;
        let message: string;
        let error: boolean = false;

        // Connect to the database
        return this._dao.connectToDb().then((connected: boolean) => {
        
            // Sanitise data
            if(!connected){
                status = HTTPStatusCodes.ServerError;
                message = "There was a fatal error with the database.";
                error = true;
            }
            if(!this.requestContainsId(req)){
                status = HTTPStatusCodes.BadRequest;
                message = "Request does not contain a 'packId' query parameter.";
                error = true;
            } else {
                if(!this.requestHasValidId(req)){
                    status = HTTPStatusCodes.BadRequest;
                    message = "Request does not contain a valid 'packId' query parameter.";
                    error = true;
                }
            }

            // Run if data is invalid
            if(error){
                return new Promise((resolve, reject) => {
                    resolve(this.createHTTPResponse(status, message));
                    reject(new Error(`Error resolving promise pertaining to following response: ${message}`));
                })
            }

            // Run if data is valid
            return this._dao.deleteCardsById(req.packId).then((response: object | null | Error) => {
                if(!response){
                    status = HTTPStatusCodes.NotFound;
                    message = `No match found for Pack ID: ${req.packId}`
                } else {
                    message = JSON.stringify(response);
                } 
                return this.createHTTPResponse(status, message);
            }) 
        }
    )}

    private requestContainsCardsData(req: any): boolean {
        return "cards" in req;
    }

    private isEditBodyValid(data: any): boolean {
        let isValid: boolean = true;
        let validKeys: Array<string> = 
        [
            "packId",
            "cardId",
            "cards",
            "translated",
            "untranslated"
        ]
        let editDataKeys: Array<string> = Object.keys(data);
        editDataKeys.forEach(key => {
            if(!validKeys.includes(key)) isValid = false;
        })
        return isValid;
    }

    private isCreateBodyValid(data: any): { valid: boolean, message: Array<string> } {
        let isValid: boolean = true
        let message: Array<string> = []

        if(!("cards" in data)){
            isValid = false;
            message.push("Request has no cards")
        }

        data.cards.forEach((c: any) => {
            if(!("untranslated" in c)){
                isValid = false;
                message.push("One or more cards in the request are missing untranslated vocab")
                return;
            }
            if(!("translated" in c)){
                isValid = false;
                message.push("One or more cards in the request are missing translated vocab")
                return;
            }
            if(!("cardId" in c)){
                isValid = false;
                message.push("One or more cards in the request are missing a cardId")
                return;
            }
        })

        return { valid: isValid, message: message }
    }

    // private async handleCardDAOResponse(responseData: Cards | null, action: string): Promise<ServerResponse> {
    //     return { statusCode: 200, success: true, message: `Cards ${action} successful` }
    // } // DEPRECATED!

    // private async handleNonExistentCardsData(): Promise<ServerResponse>{
    //     return await { statusCode: 400, success: true, message: "Request does not contain cards data" }
    // }

}

export default CardController;