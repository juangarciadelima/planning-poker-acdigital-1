"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministradorModule = void 0;
const sala_service_1 = require("./../sala/sala.service");
const common_1 = require("@nestjs/common");
const administrador_controller_1 = require("./administrador.controller");
const administrador_service_1 = require("./administrador.service");
const administrador_entity_1 = require("../../entities/administrador.entity");
const mongoose_1 = require("@nestjs/mongoose");
const sala_entity_1 = require("../../entities/sala.entity");
let AdministradorModule = class AdministradorModule {
};
AdministradorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: administrador_entity_1.Administrador.name, schema: administrador_entity_1.AdministradorSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: sala_entity_1.Sala.name, schema: sala_entity_1.SalaSchema }])
        ],
        controllers: [administrador_controller_1.AdministradorController],
        providers: [administrador_service_1.AdministradorService, sala_service_1.SalaService]
    })
], AdministradorModule);
exports.AdministradorModule = AdministradorModule;
//# sourceMappingURL=administrador.module.js.map