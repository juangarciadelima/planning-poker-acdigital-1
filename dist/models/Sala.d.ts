import { AdministradorModel } from './Administrador';
import { JogadorModel } from './Jogador';
export declare class SalaModel {
    id?: string;
    nome: string;
    jogadores?: JogadorModel[];
    administrador: AdministradorModel;
    revelarVotos: boolean;
    metodologiaSelecionada: string;
}
