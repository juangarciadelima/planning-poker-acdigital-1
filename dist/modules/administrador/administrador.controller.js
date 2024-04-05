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
exports.AdministradorController = void 0;
const administrador_service_1 = require("./administrador.service");
const common_1 = require("@nestjs/common");
const Administrador_1 = require("../../models/Administrador");
const swagger_1 = require("@nestjs/swagger");
const result_1 = require("../../models/result");
const Sala_1 = require("../../models/Sala");
const sala_service_1 = require("../sala/sala.service");
let AdministradorController = class AdministradorController {
    constructor(administradorService, salaService) {
        this.administradorService = administradorService;
        this.salaService = salaService;
    }
    async administrador(administrador) {
        try {
            return this.administradorService.criar(administrador);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar cadastro', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    buscar(email) {
        return this.administradorService.buscarUmAdministrador(email);
    }
    async buscarSalas(email) {
        try {
            return this.salaService.buscarSalas(email);
        }
        catch (error) {
            throw new common_1.HttpException(new result_1.Result('Não foi possivel realizar a chamada', false, null, error), common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Administrador_1.AdministradorModel }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Administrador_1.AdministradorModel]),
    __metadata("design:returntype", Promise)
], AdministradorController.prototype, "administrador", null);
__decorate([
    (0, common_1.Get)(':administrador'),
    __param(0, (0, common_1.Param)('administrador')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdministradorController.prototype, "buscar", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: Sala_1.SalaModel }),
    (0, common_1.Get)(':administrador/salas'),
    __param(0, (0, common_1.Param)('administrador')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdministradorController.prototype, "buscarSalas", null);
AdministradorController = __decorate([
    (0, swagger_1.ApiTags)('Administrador'),
    (0, common_1.Controller)('administrador'),
    __metadata("design:paramtypes", [administrador_service_1.AdministradorService,
        sala_service_1.SalaService])
], AdministradorController);
exports.AdministradorController = AdministradorController;
//# sourceMappingURL=administrador.controller.js.map