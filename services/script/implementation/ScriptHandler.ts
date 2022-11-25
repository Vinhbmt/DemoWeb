import { injectable, inject } from "inversify";
import { token } from "../../../token";
import { ScriptRepository } from "../../repository/ScriptRepository";
import { GetScriptForm } from "../dtos/GetScriptForm";
import { PostScriptForm } from "../dtos/PostScriptForm";
import { IScriptFormValidator } from "../interface/IScriptFormValidator";
import { IScriptHandler } from "../interface/IScriptHandler";

@injectable()
export class ScriptHandler implements IScriptHandler {
    private scriptRepository: ScriptRepository;
    private scriptValidator: IScriptFormValidator;

    constructor(@inject(token.ScriptRepository) scriptRepository: ScriptRepository, @inject(token.ScriptFormValidator) scriptValidator: IScriptFormValidator) {
        this.scriptRepository = scriptRepository;
        this.scriptValidator = scriptValidator
    }

    async getScript(script: GetScriptForm): Promise<string> {
        const id = script.getId();
        this.scriptValidator.validateId(script);
        const text = await this.scriptRepository.read(id);
        return text;
    }

    async createScript(script: PostScriptForm): Promise<void> {
        const id = script.getId();
        const text = script.getText();
        this.scriptValidator.validateId(script);
        this.scriptValidator.validateText(script);
        await this.scriptRepository.create(id, text);
    }
}