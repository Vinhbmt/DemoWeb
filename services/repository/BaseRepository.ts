// import { IRead, IWrite } from "./InterfaceRepository";
// import { MongoClient, Db, Collection} from 'mongodb';

// export abstract class BaseRepository<T> implements IRead<T>, IWrite<T> {
//     public model: any;
//     constructor(model: any) {
//         this.model = model;
//     }

//     async create(item: T): Promise<void> {
//         await this.
//     }
//     update(id: string, item: T): Promise<boolean> {
//         throw new Error("Method not implemented.");
//     }
//     delete(id: string): Promise<boolean> {
//         throw new Error("Method not implemented.");
//     }
//     find(item: T): Promise<T[]> {
//         throw new Error("Method not implemented.");
//     }
//     findOne(id: string): Promise<T> {
//         throw new Error("Method not implemented.");
//     }
// }