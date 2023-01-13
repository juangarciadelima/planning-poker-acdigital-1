/// <reference types="mongoose" />
import { HistoriaService } from './historia.service';
import { HistoriaModel } from '../../models/Historia';
import { VotoModel } from 'src/models/Voto';
export declare class HistoriaController {
    private readonly historiaService;
    constructor(historiaService: HistoriaService);
    adicionarHistoria(historia: HistoriaModel): Promise<HistoriaModel>;
    alterarHistoria(historia: HistoriaModel): Promise<HistoriaModel>;
    removerHistoria(id: string): Promise<import("mongodb").DeleteResult>;
    buscarHistoriaPorId(id: string): Promise<import("../../entities/historia.entity").Historia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    adicionarVotoJogador(id: string, voto: VotoModel): Promise<HistoriaModel>;
    finalizarHistoria(id: string): Promise<HistoriaModel>;
    reiniciarVotacaoHistoria(id: string): Promise<HistoriaModel>;
}
