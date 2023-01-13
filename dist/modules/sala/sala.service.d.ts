import { Model } from 'mongoose';
import { JogadorModel } from 'src/models/Jogador';
import { Sala, SalaDocument } from '../../entities/sala.entity';
import { SalaModel } from '../../models/Sala';
export declare class SalaService {
    private salaModel;
    constructor(salaModel: Model<SalaDocument>);
    adicionarSala(sala: SalaModel): Promise<SalaModel>;
    buscarSalas(email: string): Promise<SalaModel[]>;
    buscarPorId(id: string): import("mongoose").Query<Sala & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Sala & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, SalaDocument>;
    alterarSala(sala: SalaModel): import("mongoose").Query<Sala & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Sala & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, SalaDocument>;
    removerSala(id: string): import("mongoose").Query<import("mongodb").DeleteResult, Sala & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, SalaDocument>;
    adicionarJogador(id: string, jogador: JogadorModel): Promise<Sala & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
