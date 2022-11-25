import { GetScriptForm } from "../dtos/GetScriptForm";
import { PostScriptForm } from "../dtos/PostScriptForm";

export interface IScriptHandler {
    getScript(script: GetScriptForm): Promise<string>;
    createScript(script: PostScriptForm): Promise<void>;
}