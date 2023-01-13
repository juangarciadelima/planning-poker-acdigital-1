import { VotoModel } from "./Voto";
export declare class HistoriaModel {
    id?: string;
    idSala?: string;
    nome: string;
    votos: VotoModel[];
    emAberto: boolean;
}
