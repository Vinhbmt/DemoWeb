import {container} from './container'
import { IRead, IWrite } from './services/repository/InterfaceRepository';
import { ScriptRepository } from './services/repository/ScriptRepository';
import { ScriptFormValidator } from './services/script/implementation/ScriptFormValidator';
import { ScriptHandler } from './services/script/implementation/ScriptHandler'
import { IScriptFormValidator } from './services/script/interface/IScriptFormValidator';
import { IScriptHandler } from './services/script/interface/IScriptHandler'
import { token } from './token'

container.bind<IScriptHandler>(token.ScriptHandler).to(ScriptHandler);
container.bind<IRead & IWrite>(token.ScriptRepository).to(ScriptRepository);
container.bind<IScriptFormValidator>(token.ScriptFormValidator).to(ScriptFormValidator);