import { injectable } from "inversify";
import { IScriptForm } from "../interface/IScriptForm";
import { IScriptFormValidator } from "../interface/IScriptFormValidator";
import { ValidateResult } from "../type/ValidateResult";

@injectable()
export class ScriptFormValidator implements IScriptFormValidator {
    validateId(form: IScriptForm): ValidateResult | void {
        const id = form.getId();
        if (!id || typeof id !== 'string') {
            return {
                field: '',
                error: 'Id is invalid',
                isValid: false
            }
        }
    }

    validateText(form: IScriptForm): ValidateResult | void {
        const text = form.getText();
        if(!text ) {
            return {
                field: '',
                error: 'Text is empty',
                isValid: false
            }
        }
    }
}