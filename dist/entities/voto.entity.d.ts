import { Document } from 'mongoose';
import { Jogador } from './jogador.entity';
import { Carta } from "./carta.entity";
export declare type VotoDocument = Voto & Document;
export declare class Voto {
    carta: Carta;
    jogador: Jogador;
}
export declare const VotoSchema: import("mongoose").Schema<Document<Voto, any, any>, import("mongoose").Model<Document<Voto, any, any>, any, any, any>, {}>;
