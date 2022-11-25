import {IScriptForm} from '../interface/IScriptForm';

export class PostScriptForm implements IScriptForm {
    static fromRequestBody(requestBody: any): PostScriptForm {
        const id = requestBody.id;
        const text = requestBody.text;
        return new PostScriptForm(id, text);
      }
    
      private id: string;
      private text: string;
    
      private constructor(id: string, text: string) {
        this.id = id === undefined ? '' : id;
        this.text = text === null ? '' : text;
      }
    
      getId(): string {
        return this.id || '';
      }

      getText(): string {
        return this.text;
      }
}