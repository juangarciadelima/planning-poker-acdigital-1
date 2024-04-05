"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoriaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const historia_entity_1 = require("../../entities/historia.entity");
let HistoriaService = class HistoriaService {
    constructor(historiaModel) {
        this.historiaModel = historiaModel;
    }
    buscarHistoriasdaSala(idSala, emAberto) {
        return this.historiaModel.find({ idSala: idSala, emAberto: emAberto });
    }
    buscarHistoria(idHistoria) {
        return this.historiaModel.findById({ _id: idHistoria });
    }
    adicionarHistoria(historia) {
        const historiaCriada = new this.historiaModel(historia);
        return historiaCriada.save();
    }
    alterarHistoria(historia) {
        return this.historiaModel.findByIdAndUpdate({
            _id: historia.id,
        }, {
            $set: historia,
        }, {
            new: true,
        });
    }
    removerHistoria(id) {
        return this.historiaModel.deleteOne({ _id: id });
    }
    async adicionarVotoJogador(idHistoria, voto) {
        let historia = await this.historiaModel.findOne({
            _id: idHistoria,
        });
        let votoExistente = historia.votos.find((v) => v.jogador.email === voto.jogador.email);
        if (votoExistente) {
            historia.votos = historia.votos.map((v) => v.jogador.email === voto.jogador.email ? voto : v);
        }
        else {
            historia.votos.push(voto);
        }
        return this.historiaModel.findByIdAndUpdate({
            _id: historia.id,
        }, {
            $set: historia,
        }, {
            new: true,
        });
    }
    async finalizarHistoria(idHistoria) {
        let historia = await this.historiaModel.findById({
            _id: idHistoria,
        });
        historia.emAberto = false;
        return this.historiaModel.findByIdAndUpdate({
            _id: historia.id,
        }, {
            $set: historia,
        }, {
            new: true,
        });
    }
    async reiniciarVotacaoHistoria(idHistoria) {
        let historia = await this.historiaModel.findById({
            _id: idHistoria,
        });
        historia.votos = [];
        return this.historiaModel.findByIdAndUpdate({
            _id: historia.id,
        }, {
            $set: historia,
        }, {
            new: true,
        });
    }
};
HistoriaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(historia_entity_1.Historia.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HistoriaService);
exports.HistoriaService = HistoriaService;
//# sourceMappingURL=historia.service.js.map