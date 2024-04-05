"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetodologiaModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const metodologia_entity_1 = require("../../entities/metodologia.entity");
const metodologia_controller_1 = require("./metodologia.controller");
const metodologia_service_1 = require("./metodologia.service");
let MetodologiaModule = class MetodologiaModule {
};
MetodologiaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: metodologia_entity_1.Metodologia.name, schema: metodologia_entity_1.MetodologiaSchema }])
        ],
        controllers: [metodologia_controller_1.MetodologiaController],
        providers: [metodologia_service_1.MetodologiaService],
    })
], MetodologiaModule);
exports.MetodologiaModule = MetodologiaModule;
//# sourceMappingURL=metodologia.module.js.map