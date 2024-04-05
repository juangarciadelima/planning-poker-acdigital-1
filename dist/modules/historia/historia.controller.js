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
exports.HistoriaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const historia_service_1 = require("./historia.service");
const Historia_1 = require("../../models/Historia");
const result_1 = require("../../models/result");
const Voto_1 = require("../../models/Voto");
let HistoriaController = class HistoriaController {
    constructor(historiaService) {
        this.historiaService = historiaService;
    }
    async adicionarHistoria(historia) {
        try {
            return this.historiaService.adicionarHistoria(historia);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar cadastro', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async alterarHistoria(historia) {
        try {
            return this.historiaService.alterarHistoria(historia);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a alteração', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async removerHistoria(id) {
        try {
            return this.historiaService.removerHistoria(id);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a renoção', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async buscarHistoriaPorId(id) {
        try {
            return this.historiaService.buscarHistoria(id);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a renoção', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async adicionarVotoJogador(id, voto) {
        try {
            return await this.historiaService.adicionarVotoJogador(id, voto);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a alteração', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async finalizarHistoria(id) {
        try {
            return await this.historiaService.finalizarHistoria(id);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a alteração', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async reiniciarVotacaoHistoria(id) {
        try {
            return await this.historiaService.reiniciarVotacaoHistoria(id);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel reiniciar votação', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Historia_1.HistoriaModel]),
    __metadata("design:returntype", Promise)
], HistoriaController.prototype, "adicionarHistoria", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Historia_1.HistoriaModel }),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Historia_1.HistoriaModel]),
    __metadata("design:returntype", Promise)
], HistoriaController.prototype, "alterarHistoria", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Historia_1.HistoriaModel }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HistoriaController.prototype, "removerHistoria", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Historia_1.HistoriaModel }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HistoriaController.prototype, "buscarHistoriaPorId", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Historia_1.HistoriaModel }),
    (0, common_1.Put)(':id/votar'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Voto_1.VotoModel]),
    __metadata("design:returntype", Promise)
], HistoriaController.prototype, "adicionarVotoJogador", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Historia_1.HistoriaModel }),
    (0, common_1.Put)(':id/finalizar'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HistoriaController.prototype, "finalizarHistoria", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Historia_1.HistoriaModel }),
    (0, common_1.Put)(':id/reiniciar'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HistoriaController.prototype, "reiniciarVotacaoHistoria", null);
HistoriaController = __decorate([
    (0, swagger_1.ApiTags)('História'),
    (0, common_1.Controller)('historia'),
    __metadata("design:paramtypes", [historia_service_1.HistoriaService])
], HistoriaController);
exports.HistoriaController = HistoriaController;
//# sourceMappingURL=historia.controller.js.map