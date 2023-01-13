import { Model } from 'mongoose';
import { MetodologiaModel } from 'src/models/Metodologia';
import { Metodologia, MetodologiaDocument } from '../../entities/metodologia.entity';
export declare class MetodologiaService {
    private metodologiaModel;
    constructor(metodologiaModel: Model<MetodologiaDocument>);
    buscarMetodologia(): import("mongoose").Query<(Metodologia & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Metodologia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, MetodologiaDocument>;
    buscarMetodologiaPorId(id: string): import("mongoose").Query<Metodologia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Metodologia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, MetodologiaDocument>;
    alterarMetodologia(metodologia: MetodologiaModel): import("mongoose").Query<Metodologia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Metodologia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, MetodologiaDocument>;
    adicionarMetodologia(metodologia: MetodologiaModel): Promise<Metodologia>;
    remover(id: string): import("mongoose").Query<import("mongodb").DeleteResult, Metodologia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, MetodologiaDocument>;
}
