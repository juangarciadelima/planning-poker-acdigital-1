import { Voto } from "./voto.entity";
import { Document } from 'mongoose';
export declare type HistoriaDocument = Historia & Document;
export declare class Historia {
    idSala?: string;
    nome: string;
    votos: Voto[];
    emAberto: boolean;
}
export declare const HistoriaSchema: import("mongoose").Schema<Document<Historia, any, any>, import("mongoose").Model<Document<Historia, any, any>, any, any, any>, {}>;
