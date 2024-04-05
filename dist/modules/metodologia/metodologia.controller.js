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
exports.MetodologiaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const metodologia_service_1 = require("./metodologia.service");
const Metodologia_1 = require("../../models/Metodologia");
const result_1 = require("../../models/result");
let MetodologiaController = class MetodologiaController {
    constructor(metodologiaService) {
        this.metodologiaService = metodologiaService;
    }
    async buscar() {
        try {
            return this.metodologiaService.buscarMetodologia();
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a chamada', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async buscarPorId(id) {
        try {
            return this.metodologiaService.buscarMetodologiaPorId(id);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a chamada', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async adicionarMetodologia(metodologia) {
        try {
            return this.metodologiaService.adicionarMetodologia(metodologia);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a alteração', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async alterarMetodologia(metodologia) {
        try {
            return this.metodologiaService.alterarMetodologia(metodologia);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a alteração', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            return await this.metodologiaService.remover(id);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a alteração', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Metodologia_1.MetodologiaModel }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MetodologiaController.prototype, "buscar", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Metodologia_1.MetodologiaModel }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MetodologiaController.prototype, "buscarPorId", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Metodologia_1.MetodologiaModel }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Metodologia_1.MetodologiaModel]),
    __metadata("design:returntype", Promise)
], MetodologiaController.prototype, "adicionarMetodologia", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Metodologia_1.MetodologiaModel }),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Metodologia_1.MetodologiaModel]),
    __metadata("design:returntype", Promise)
], MetodologiaController.prototype, "alterarMetodologia", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Metodologia_1.MetodologiaModel }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MetodologiaController.prototype, "delete", null);
MetodologiaController = __decorate([
    (0, swagger_1.ApiTags)('Métologia'),
    (0, common_1.Controller)('metodologia'),
    __metadata("design:paramtypes", [metodologia_service_1.MetodologiaService])
], MetodologiaController);
exports.MetodologiaController = MetodologiaController;
//# sourceMappingURL=metodologia.controller.js.map