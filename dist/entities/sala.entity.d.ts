import { Document } from 'mongoose';
import { Administrador } from './administrador.entity';
import { Jogador } from './jogador.entity';
export declare type SalaDocument = Sala & Document;
export declare class Sala {
    nome: string;
    jogadores?: Jogador[];
    administrador: Administrador;
    revelarVotos: boolean;
    metodologiaSelecionada: string;
}
export declare const SalaSchema: import("mongoose").Schema<Document<Sala, any, any>, import("mongoose").Model<Document<Sala, any, any>, any, any, any>, {}>;
