import ServerResponse from "../utils/ServerResponse";

class Controller {

    private idIsValid(id: string): boolean{
        let isValid: boolean = true;
        if(isNaN(parseInt(id))){
            isValid = false
        }
        if(!(id.length > 0 && id.length < 6)){
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
        return await { responseCode: 400, message: "Request does not contain id", data: null }
    }

    protected async handleInvalidRequestId(): Promise<ServerResponse> {
        return await { responseCode: 400, message: "Request contains invalid Id", data: null }   
    }

    protected async handlePostDatabaseIssue(): Promise<ServerResponse> {
        return await { responseCode: 500, message: "POST request was unsuccessful due to a database issue", data: null }
    }

    protected async handleInvalidRequestParamsOrBody(message: Array<string>): Promise<ServerResponse>{
        return { responseCode: 400, message: message, data: null}
    }

}

export default Controller;