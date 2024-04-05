/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
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
        _id: import("mongoose").Types.ObjectId;
    }>;
    adicionarVotoJogador(id: string, voto: VotoModel): Promise<HistoriaModel>;
    finalizarHistoria(id: string): Promise<HistoriaModel>;
    reiniciarVotacaoHistoria(id: string): Promise<HistoriaModel>;
}
