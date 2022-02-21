import ServerResponse from "../utils/ServerResponse";

class Controller {

    private idIsValid(id: number): boolean{
        let isValid: boolean = true;
        if(isNaN(id)){
            isValid = false
        }
        if(!(id.toString().length > 0 && id.toString().length < 6)){
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

    protected async handleDatabaseIssue(action: string): Promise<ServerResponse> {
        return await { responseCode: 500, message: `${action} request was unsuccessful due to a database issue`, data: null }
    }

    protected async handleInvalidRequestParamsOrBody(message: Array<string>): Promise<ServerResponse>{
        return { responseCode: 400, message: message, data: null}
    }

}

export default Controller;