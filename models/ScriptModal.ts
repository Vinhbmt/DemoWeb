import { Schema, model, connect} from 'mongoose';

interface Script {
    param: string,
    text: string
}

const scriptSchema = new Schema<Script> ({
    param: {type: String, required: true, unique: true},
    text: {type: String, required: true}
})

export const ScriptModel = model<Script>('Script', scriptSchema);
