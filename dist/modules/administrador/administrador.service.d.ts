import { Model } from 'mongoose';
import { Administrador, AdministradorDocument } from '../../entities/administrador.entity';
import { AdministradorModel } from '../../models/Administrador';
export declare class AdministradorService {
    private administradorModel;
    constructor(administradorModel: Model<AdministradorDocument>);
    criar(administrador: AdministradorModel): Promise<AdministradorDocument>;
    buscarTodos(): import("mongoose").Query<(Administrador & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Administrador & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, AdministradorDocument>;
    buscarUmAdministrador(email: string): import("mongoose").Query<Administrador & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Administrador & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, AdministradorDocument>;
    alterar(id: string, administrador: AdministradorModel): import("mongoose").Query<Administrador & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Administrador & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, AdministradorDocument>;
    remover(id: string): import("mongoose").Query<import("mongodb").DeleteResult, Administrador & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, AdministradorDocument>;
}
