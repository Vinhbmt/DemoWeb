import { IScriptForm} from "./IScriptForm";
import { ValidateResult } from "../type/ValidateResult";


export interface IScriptFormValidator {
    validateId(form: IScriptForm): ValidateResult | void;
    validateText(form: IScriptForm): ValidateResult | void;
}