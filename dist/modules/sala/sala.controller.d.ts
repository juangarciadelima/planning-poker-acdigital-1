import { SalaService } from './sala.service';
import { SalaModel } from '../../models/Sala';
import { HistoriaModel } from 'src/models/Historia';
import { JogadorModel } from 'src/models/Jogador';
import { HistoriaService } from '../historia/historia.service';
export declare class SalaController {
    private readonly salaService;
    private readonly historiaService;
    constructor(salaService: SalaService, historiaService: HistoriaService);
    buscarHistoriasdaSala(id: string, emAberto: boolean): Promise<HistoriaModel[]>;
    buscarPorId(id: string): Promise<SalaModel>;
    adicionarSala(sala: SalaModel): Promise<SalaModel>;
    alterarSala(sala: SalaModel): Promise<SalaModel>;
    removerSala(id: string): Promise<import("mongodb").DeleteResult>;
    remover(id: string): Promise<import("mongodb").DeleteResult>;
    adicionarjogador(id: string, jogador: JogadorModel): Promise<SalaModel>;
}
