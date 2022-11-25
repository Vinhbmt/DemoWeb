export interface IRead {
    read(id: string): Promise<string>;
}

export interface IWrite {
    create(id: string, text: string): Promise<void>;
}