import { IScriptForm } from '../interface/IScriptForm';

export class GetScriptForm implements IScriptForm {
  static fromRequestBody(requestBody: any): GetScriptForm {
    const id = requestBody.id;
    return new GetScriptForm(id);
  }

  private id: string;

  private constructor(id: string) {
    this.id = id === undefined ? '' : id;
  }

  getId(): string {
    return this.id || '';
  }

  getText(): string {
    return '';
  }
}