import ServerResponse from "../utils/ServerResponse";
import Pack from "../utils/Pack";
import HTTPStatusCodes from "../utils/HTTPStatusCodes";

class Controller {

    private idIsValid(id: string): boolean{
        let isValid: boolean = true;
        if(!(id.length > 0)){
            isValid = false
        }
        return isValid;
    }

    protected requestContainsId(req: object): boolean {
        return "packId" in req;
    }

    protected requestHasValidId(req: any): boolean {
        let isValid: boolean = true;
        if(!this.requestContainsId(req)){
            isValid = false;
        }
        if(!this.idIsValid(req.packId)){
            isValid = false;
        }
        return isValid;
    }

    protected async handleNonexistentRequestId(): Promise<ServerResponse> {
        return await { statusCode: HTTPStatusCodes.BadRequest, success: true, message: "Request does not contain id" }
    }

    protected async handleInvalidRequestId(): Promise<ServerResponse> {
        return await { statusCode: HTTPStatusCodes.BadRequest, success: true, message: "Request contains invalid Id"  }   
    }

    protected async handleInvalidRequestParamsOrBody(message: Array<string>): Promise<ServerResponse>{
        return { statusCode: HTTPStatusCodes.BadRequest, success: true, message: message.toString() }
    }

    protected async handleDatabaseIssue(action: string): Promise<ServerResponse> {
        return await { statusCode: 500, success: true, message: `${action} request was unsuccessful due to a database issue` }
    } // DEPRECATED

    protected createHTTPResponse(status: number, msg: string): ServerResponse {
        let isSuccessful: boolean = true;
        if(!(status >= 200 && status <= 299)) isSuccessful = false;
        return { statusCode: status, success: isSuccessful, message: msg };
    }

}

export default Controller;