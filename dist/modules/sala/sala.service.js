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
exports.SalaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const sala_entity_1 = require("../../entities/sala.entity");
let SalaService = class SalaService {
    constructor(salaModel) {
        this.salaModel = salaModel;
    }
    adicionarSala(sala) {
        const salaCriada = new this.salaModel(sala);
        return salaCriada.save();
    }
    async buscarSalas(email) {
        return await this.salaModel.find({ "administrador.email": email }).sort({ field: 'desc', test: -1 });
    }
    buscarPorId(id) {
        return this.salaModel.findById(id);
    }
    alterarSala(sala) {
        return this.salaModel.findByIdAndUpdate({
            _id: sala.id
        }, {
            $set: sala,
        }, {
            new: true
        });
    }
    removerSala(id) {
        return this.salaModel.deleteOne({ _id: id });
    }
    async adicionarJogador(id, jogador) {
        let sala = await this.salaModel.findById(id);
        sala.jogadores.push(jogador);
        return this.salaModel.findByIdAndUpdate({
            _id: sala.id
        }, {
            $set: sala,
        }, {
            new: true
        });
    }
};
SalaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(sala_entity_1.Sala.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SalaService);
exports.SalaService = SalaService;
//# sourceMappingURL=sala.service.js.map