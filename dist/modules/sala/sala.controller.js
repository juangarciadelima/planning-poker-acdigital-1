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
exports.SalaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sala_service_1 = require("./sala.service");
const Sala_1 = require("../../models/Sala");
const result_1 = require("../../models/result");
const Historia_1 = require("../../models/Historia");
const Jogador_1 = require("../../models/Jogador");
const historia_service_1 = require("../historia/historia.service");
let SalaController = class SalaController {
    constructor(salaService, historiaService) {
        this.salaService = salaService;
        this.historiaService = historiaService;
    }
    async buscarHistoriasdaSala(id, emAberto) {
        try {
            return this.historiaService.buscarHistoriasdaSala(id, emAberto);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a chamada', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async buscarPorId(id) {
        try {
            return this.salaService.buscarPorId(id);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a chamada', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async adicionarSala(sala) {
        try {
            return this.salaService.adicionarSala(sala);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar cadastro', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async alterarSala(sala) {
        try {
            return this.salaService.alterarSala(sala);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a alteração', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async removerSala(id) {
        try {
            return this.salaService.removerSala(id);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a chamada', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async remover(id) {
        try {
            return this.salaService.removerSala(id);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a chamada', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async adicionarjogador(id, jogador) {
        try {
            return await this.salaService.adicionarJogador(id, jogador);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a alteração', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Historia_1.HistoriaModel }),
    (0, common_1.Get)(':id/historia/:emAberto'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('emAberto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], SalaController.prototype, "buscarHistoriasdaSala", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Sala_1.SalaModel }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SalaController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Sala_1.SalaModel]),
    __metadata("design:returntype", Promise)
], SalaController.prototype, "adicionarSala", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Sala_1.SalaModel }),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Sala_1.SalaModel]),
    __metadata("design:returntype", Promise)
], SalaController.prototype, "alterarSala", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Sala_1.SalaModel }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SalaController.prototype, "removerSala", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Sala_1.SalaModel }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SalaController.prototype, "remover", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Sala_1.SalaModel }),
    (0, common_1.Put)(':id/jogador'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Jogador_1.JogadorModel]),
    __metadata("design:returntype", Promise)
], SalaController.prototype, "adicionarjogador", null);
SalaController = __decorate([
    (0, swagger_1.ApiTags)('Sala'),
    (0, common_1.Controller)('sala'),
    __metadata("design:paramtypes", [sala_service_1.SalaService,
        historia_service_1.HistoriaService])
], SalaController);
exports.SalaController = SalaController;
//# sourceMappingURL=sala.controller.js.map