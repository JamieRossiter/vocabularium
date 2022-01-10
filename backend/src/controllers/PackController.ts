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
        // Check for valid ID too!
        } else {
            response = this._dao.getPackById(req.id).then(data => {
                return this.handleDAOResponse(data, RequestActions.GET);
            })
        }
        return response;
    }

    private async handleDAOResponse(responseData: Pack, action: string): Promise<ServerResponse> {
        return { responseCode: 200, message: `Pack ${action} successful`, data: responseData }
    }   

}

export default PackController;