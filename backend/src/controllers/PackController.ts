import Controller from "./Controller";
import ServerResponse from "../utils/ServerResponse";
import PackDAO from "../dao/PackDAO";
import Pack from "../utils/Pack";
import RequestActions from "../utils/RequestActions";
import HTTPStatusCodes from "../utils/HTTPStatusCodes";
import { InsertOneResult } from "mongodb";

class PackController extends Controller {

    private _dao: PackDAO;

    constructor(){
        super();
        this._dao = new PackDAO();
    }

    // public async getPack(req: any): Promise<ServerResponse> {
    //     let response: Promise<ServerResponse>;
    //     if(!this.requestContainsId(req)){
    //         response = this.handleNonexistentRequestId();
    //     } else {
    //         if(!this.requestHasValidId(req)){
    //             response = this.handleInvalidRequestId();
    //         } else {
    //             response = this._dao.findPackById(parseInt(req.packId)).then(data => {
    //                 return this.handlePackDAOResponse(data, RequestActions.GET);
    //             })
    //         }
    //     }
    //     return response;
    // }

    public async getPack(req: any): Promise<ServerResponse> {

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
            return this._dao.findPackById(parseInt(req.packId)).then((response: object | null | Error) => {
                if(!response){
                    status = HTTPStatusCodes.NotFound;
                    message = `No match found for Pack ID: ${req.packId}`
                } else {
                    message = JSON.stringify(response);
                } 
                return this.createHTTPResponse(status, message);
            })     
        })
    }

    public async createPack(req: any): Promise<ServerResponse> {
        
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
            return this._dao.insertPackByData(req).then((response: InsertOneResult | Error) => {
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

    public editPack(req: any): Promise<ServerResponse> {
        let response: Promise<ServerResponse>

        if(!this.requestContainsId(req)){
            response = this.handleNonexistentRequestId();
        } else {
            if(!this.requestHasValidId(req)){
                response = this.handleInvalidRequestId();
            } else {
                if(!this.isEditBodyValid(req)){
                    response = this.handleInvalidRequestParamsOrBody(["Request contains invalid body parameter(s) for a pack"])
                } else {
                    if(this._dao.editPackData(req)){
                        response = this.handlePackDAOResponse(null, RequestActions.PUT);
                    } else {
                        response = this.handleDatabaseIssue(RequestActions.PUT);
                    }
                }
            }
        }
        return response;
    }

    private isEditBodyValid(data: any): boolean {
        let isValid: boolean = true;
        let validKeys: Array<string> = 
        [
            "packId",
            "title", 
            "dateCreated", 
            "description",
            "languageOptions"
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

        if(!("title" in data)){
            isValid = false;
            message.push("Request has no title")
        }
        if(!("dateCreated" in data)){
            isValid = false;
            message.push("Request has no creation date")
        }
        if(!("description" in data)){
            isValid = false;
            message.push("Request has no description")
        }
        if(!("languageOptions" in data)){
            isValid = false;
            message.push("Request has no language options")
        }
        if(!("languageLonghand" in data.languageOptions)){
            isValid = false;
            message.push("Request has no language longhand code")
        }
        if(!("languageShorthand" in data.languageOptions)){
            isValid = false;
            message.push("Request has no language shorthand code")
        }
        if(!("countryCode" in data.languageOptions)){
            isValid = false;
            message.push("Request has no language country code")
        }

        return { valid: isValid, message: message }
    }

    private async handlePackDAOResponse(responseData: Pack | null, action: string): Promise<ServerResponse> {
        return { statusCode: 200, success: true, message: `Pack ${action} successful` }
    } // DEPRECATED!  

}

export default PackController;