import ServerResponse from "../utils/ServerResponse";

class Controller {

    constructor(){
    }

    protected requestContainsId(req: object): boolean {
        const keys: Array<string> = Object.keys(req);
        if(!keys.includes("id")) return false;
        return true;
    }

    protected async handleNonexistentRequestId(): Promise<ServerResponse> {
        return await { responseCode: 400, message: "Request does not contain request Id.", data: null }
    }

}

export default Controller;