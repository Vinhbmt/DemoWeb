import { injectable } from "inversify";
import { StringExpression } from "mongoose";
import { IRead, IWrite } from "./InterfaceRepository";
import {ScriptModel} from '../../models/ScriptModal'

@injectable()
export class ScriptRepository implements IRead, IWrite {
    public readonly model;
    constructor() {
        this.model = ScriptModel;
    }

    async create(id: string, text: string): Promise<void> {
        await this.model.create({param: id, text: text});
    }

    async read(id: string): Promise<string> {
        const script = await this.model.findOne({param: id});
        return script ? script.text || '' : ''  ;
    }
}
