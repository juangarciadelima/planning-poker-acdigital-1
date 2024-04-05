import { MetodologiaService } from './metodologia.service';
import { MetodologiaModel } from '../../models/Metodologia';
export declare class MetodologiaController {
    private readonly metodologiaService;
    constructor(metodologiaService: MetodologiaService);
    buscar(): Promise<MetodologiaModel[]>;
    buscarPorId(id: string): Promise<MetodologiaModel>;
    adicionarMetodologia(metodologia: MetodologiaModel): Promise<MetodologiaModel>;
    alterarMetodologia(metodologia: MetodologiaModel): Promise<MetodologiaModel>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
}
