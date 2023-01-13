import { Document } from 'mongoose';
export declare type JogadorDocument = Jogador & Document;
export declare class Jogador {
    nome: string;
    email: string;
}
export declare const JogadorSchema: import("mongoose").Schema<Document<Jogador, any, any>, import("mongoose").Model<Document<Jogador, any, any>, any, any, any>, {}>;
