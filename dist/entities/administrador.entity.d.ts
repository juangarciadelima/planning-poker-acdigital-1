import { Document } from 'mongoose';
export declare type AdministradorDocument = Administrador & Document;
export declare class Administrador {
    nome: string;
    email: string;
}
export declare const AdministradorSchema: import("mongoose").Schema<Document<Administrador, any, any>, import("mongoose").Model<Document<Administrador, any, any>, any, any, any>, {}>;
