"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const historia_entity_1 = require("../../entities/historia.entity");
const sala_entity_1 = require("../../entities/sala.entity");
const historia_service_1 = require("../historia/historia.service");
const sala_controller_1 = require("./sala.controller");
const sala_service_1 = require("./sala.service");
let SalaModule = class SalaModule {
};
SalaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: sala_entity_1.Sala.name, schema: sala_entity_1.SalaSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: historia_entity_1.Historia.name, schema: historia_entity_1.HistoriaSchema }])
        ],
        controllers: [sala_controller_1.SalaController],
        providers: [sala_service_1.SalaService, historia_service_1.HistoriaService],
    })
], SalaModule);
exports.SalaModule = SalaModule;
//# sourceMappingURL=sala.module.js.map