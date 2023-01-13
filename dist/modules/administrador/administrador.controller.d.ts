/// <reference types="mongoose" />
import { AdministradorService } from './administrador.service';
import { AdministradorModel } from '../../models/Administrador';
import { SalaModel } from '../../models/Sala';
import { SalaService } from '../sala/sala.service';
export declare class AdministradorController {
    private readonly administradorService;
    private readonly salaService;
    constructor(administradorService: AdministradorService, salaService: SalaService);
    administrador(administrador: AdministradorModel): Promise<AdministradorModel>;
    buscar(email: string): import("mongoose").Query<import("../../entities/administrador.entity").Administrador & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, import("../../entities/administrador.entity").Administrador & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("../../entities/administrador.entity").AdministradorDocument>;
    buscarSalas(email: string): Promise<SalaModel[]>;
}
