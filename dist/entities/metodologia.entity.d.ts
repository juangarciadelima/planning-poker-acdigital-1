import { Document } from 'mongoose';
import { Carta } from "./carta.entity";
export declare type MetodologiaDocument = Metodologia & Document;
export declare class Metodologia {
    nome: string;
    cartas: Carta[];
}
export declare const MetodologiaSchema: import("mongoose").Schema<Document<Metodologia, any, any>, import("mongoose").Model<Document<Metodologia, any, any>, any, any, any>, {}>;
