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
import { JogadorModel } from 'src/models/Jogador';
import { Sala, SalaDocument } from '../../entities/sala.entity';
import { SalaModel } from '../../models/Sala';
export declare class SalaService {
    private salaModel;
    constructor(salaModel: Model<SalaDocument>);
    adicionarSala(sala: SalaModel): Promise<SalaModel>;
    buscarSalas(email: string): Promise<SalaModel[]>;
    buscarPorId(id: string): import("mongoose").Query<Sala & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, Sala & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, {}, SalaDocument>;
    alterarSala(sala: SalaModel): import("mongoose").Query<Sala & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, Sala & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, {}, SalaDocument>;
    removerSala(id: string): import("mongoose").Query<import("mongodb").DeleteResult, Sala & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, {}, SalaDocument>;
    adicionarJogador(id: string, jogador: JogadorModel): Promise<Sala & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
}
