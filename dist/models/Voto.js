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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotoModel = void 0;
const Jogador_1 = require("./Jogador");
const Carta_1 = require("./Carta");
const swagger_1 = require("@nestjs/swagger");
class VotoModel {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Carta_1.CartaModel)
], VotoModel.prototype, "carta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Jogador_1.JogadorModel)
], VotoModel.prototype, "jogador", void 0);
exports.VotoModel = VotoModel;
//# sourceMappingURL=Voto.js.map