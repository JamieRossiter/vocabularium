import Controller from "./Controller";
import { v2 } from "@google-cloud/translate";
import { Translate } from "@google-cloud/translate/build/src/v2";
import HTTPStatusCodes from "../utils/HTTPStatusCodes";
import ServerResponse from "../utils/ServerResponse";

class TranslationController extends Controller {

    private _translateConfig: { projectId: string, keyFilename: string };
    private _translate: Translate;

    constructor(){
        super();
        this._translateConfig = { projectId: "vocabularium", keyFilename: "../google_credentials/vocabularium-911d70c9d6c8.json" }
        this._translate = new v2.Translate(this._translateConfig);
    }

    public async translate(req: any): Promise<ServerResponse>{

        let status: number = HTTPStatusCodes.Success;
        let message: string;
        let error: boolean = false;

        // Perform validation
        if(!this.isTranslateQueryParamsValid(req)){
            status = HTTPStatusCodes.BadRequest;
            message = "Request does not contain valid query parameters. Query should contain 'text' and 'targetLanguage' parameters."
            error = true;
        } else {
            if(!this.isTargetLanguageValid(req.targetLanguage)){
                status = HTTPStatusCodes.BadRequest;
                message = "Request does not contain a valid target language. Target languages should be Alpha-2 codes. See https://gist.github.com/tadast/8827699 for more information."
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

        // Run if query data is valid
        const text: string = req.text;
        const targetLanguage: string = req.targetLanguage;

        return this.translateEnglishTextToTargetLanguage(text, targetLanguage).then(translatedText => {
            message = translatedText[0].toString(); // First element in returned array within an array is the raw, translated text
            return this.createHTTPResponse(status, message);
        })

    }

    private async translateEnglishTextToTargetLanguage(text: string, targetLanguage: string): Promise<Array<[string, any]>> {
        return await this._translate.translate(text, targetLanguage); 
    }

    private isTranslateQueryParamsValid(req: any): boolean {
        return ("text" in req) && ("targetLanguage" in req);
    }

    private isTargetLanguageValid(target: string): boolean{
        // TODO: Compare to a list of available languages. For testing purposes, only Indonesian (ID) and Italian (IT) are valid.
        return (target.toLowerCase() === "id" || target.toLowerCase() === "it");
    }

}

export default TranslationController;