import Controller from "./Controller";
import ServerResponse from "../utils/ServerResponse";
import PackDAO from "../dao/PackDAO";
import Pack from "../utils/Pack";
import RequestActions from "../utils/RequestActions";

class PackController extends Controller {

    private _dao: PackDAO;

    constructor(){
        super();
        this._dao = new PackDAO();
    }

    public async getPack(req: any): Promise<ServerResponse> {
        let response: Promise<ServerResponse>;
        if(!this.requestContainsId(req)){
            response = this.handleNonexistentRequestId();
        } else {
            if(!this.requestHasValidId(req)){
                response = this.handleInvalidRequestId();
            } else {
                response = this._dao.getPackById(req.id).then(data => {
                    return this.handlePackDAOResponse(data, RequestActions.GET);
                })
            }
        }
        return response;
    }

    public createPack(req: any): Promise<ServerResponse> {
        let response: Promise<ServerResponse>

        if(!this.requestContainsId(req)){
            response = this.handleNonexistentRequestId();
        } else {
            if(this.requestHasValidId(req)){
                response = this.handleInvalidRequestId();
            } else {

                let validityObject = this.isPackDataValid(req)
                if(!validityObject.valid){
                    response = this.handleInvalidRequestParamsOrBody(validityObject.message)
                } else {
                    if(this._dao.createNewPack(req)){
                        response = this.handlePackDAOResponse(null, RequestActions.POST)
                    } else {
                        response = this.handlePostDatabaseIssue();
                    }
                }
                
            }
        }
        return response;
    }

    private isPackDataValid(data: any): { valid: boolean, message: Array<string> } {
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
        return { responseCode: 200, message: `Pack ${action} successful`, data: responseData }
    }   

}

export default PackController;