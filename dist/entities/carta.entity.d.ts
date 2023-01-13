import { TipoDeCarta } from './enum/tipo.carta.enum';
import { Document } from 'mongoose';
export declare type CartaDocument = Carta & Document;
export declare class Carta {
    tipo: TipoDeCarta;
    valor: string | number;
}
export declare const CartaSchema: import("mongoose").Schema<Document<Carta, any, any>, import("mongoose").Model<Document<Carta, any, any>, any, any, any>, {}>;
