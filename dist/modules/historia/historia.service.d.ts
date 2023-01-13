import { Model } from 'mongoose';
import { HistoriaModel } from 'src/models/Historia';
import { VotoModel } from 'src/models/Voto';
import { Historia, HistoriaDocument } from '../../entities/historia.entity';
export declare class HistoriaService {
    private historiaModel;
    constructor(historiaModel: Model<HistoriaDocument>);
    buscarHistoriasdaSala(idSala: string, emAberto: boolean): import("mongoose").Query<(Historia & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Historia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, HistoriaDocument>;
    buscarHistoria(idHistoria: string): import("mongoose").Query<Historia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Historia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, HistoriaDocument>;
    adicionarHistoria(historia: HistoriaModel): Promise<HistoriaModel>;
    alterarHistoria(historia: HistoriaModel): import("mongoose").Query<Historia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Historia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, HistoriaDocument>;
    removerHistoria(id: string): import("mongoose").Query<import("mongodb").DeleteResult, Historia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, HistoriaDocument>;
    adicionarVotoJogador(idHistoria: string, voto: VotoModel): Promise<Historia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    finalizarHistoria(idHistoria: string): Promise<Historia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    reiniciarVotacaoHistoria(idHistoria: string): Promise<Historia & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
