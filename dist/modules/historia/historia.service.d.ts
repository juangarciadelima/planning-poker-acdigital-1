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
/// <reference types="mongoose/types/inferschematype" />
import { Model, Types } from 'mongoose';
import { HistoriaModel } from 'src/models/Historia';
import { VotoModel } from 'src/models/Voto';
import { Historia, HistoriaDocument } from '../../entities/historia.entity';
export declare class HistoriaService {
    private historiaModel;
    constructor(historiaModel: Model<HistoriaDocument>);
    buscarHistoriasdaSala(idSala: string, emAberto: boolean): import("mongoose").Query<(Historia & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    })[], Historia & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, {}, HistoriaDocument>;
    buscarHistoria(idHistoria: string): import("mongoose").Query<Historia & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, Historia & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, {}, HistoriaDocument>;
    adicionarHistoria(historia: HistoriaModel): Promise<HistoriaModel>;
    alterarHistoria(historia: HistoriaModel): import("mongoose").Query<Historia & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, Historia & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, {}, HistoriaDocument>;
    removerHistoria(id: string): import("mongoose").Query<import("mongodb").DeleteResult, Historia & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, {}, HistoriaDocument>;
    adicionarVotoJogador(idHistoria: string, voto: VotoModel): Promise<Historia & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    finalizarHistoria(idHistoria: string): Promise<Historia & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    reiniciarVotacaoHistoria(idHistoria: string): Promise<Historia & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
