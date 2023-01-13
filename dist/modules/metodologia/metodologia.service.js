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
exports.MetodologiaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Metodologia_1 = require("../../models/Metodologia");
const metodologia_entity_1 = require("../../entities/metodologia.entity");
let MetodologiaService = class MetodologiaService {
    constructor(metodologiaModel) {
        this.metodologiaModel = metodologiaModel;
    }
    buscarMetodologia() {
        return this.metodologiaModel.find();
    }
    buscarMetodologiaPorId(id) {
        return this.metodologiaModel.findById(id);
    }
    alterarMetodologia(metodologia) {
        return this.metodologiaModel.findByIdAndUpdate({
            _id: metodologia.id,
        }, {
            $set: metodologia,
        }, {
            new: true,
        });
    }
    adicionarMetodologia(metodologia) {
        const medologiaCriada = new this.metodologiaModel(metodologia);
        return medologiaCriada.save();
    }
    remover(id) {
        return this.metodologiaModel.deleteOne({ _id: id });
    }
};
MetodologiaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(metodologia_entity_1.Metodologia.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MetodologiaService);
exports.MetodologiaService = MetodologiaService;
//# sourceMappingURL=metodologia.service.js.map