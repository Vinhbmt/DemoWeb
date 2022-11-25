import {inject} from 'inversify';
import {controller, httpGet, httpPost, interfaces} from 'inversify-express-utils';
import {Request, Response} from 'express';
import BaseController from "./BaseController";
import { GetScriptForm } from '../services/script/dtos/GetScriptForm';
import { PostScriptForm } from '../services/script/dtos/PostScriptForm';
import { ScriptHandler } from '../services/script/implementation/ScriptHandler';
import { token } from '../token';
import { IScriptHandler } from '../services/script/interface/IScriptHandler';


@controller('/admin')
export default class ScriptController extends BaseController{
    
    private handler: IScriptHandler

    constructor(@inject(token.ScriptHandler) scriptHandler: IScriptHandler){
        super();
        this.handler = scriptHandler;
    }

    @httpGet('/clipBoard/:id')
    async getScript(Request: Request, Response: Response) {
        const getScriptIdForm = GetScriptForm.fromRequestBody(this.params(Request));
        const result = await this.handler.getScript(getScriptIdForm);
        Response.send(result);
    }

    @httpPost('/clipBoard/:id')
    async postScript(Request: Request, Response: Response) {
        const postScriptForm = PostScriptForm.fromRequestBody({...this.params(Request), text: Request.body.text});
        this.handler.createScript(postScriptForm);
        Response.send("Create successfully");
    }
}

