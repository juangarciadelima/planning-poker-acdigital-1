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
exports.CartaSchema = exports.Carta = void 0;
const tipo_carta_enum_1 = require("./enum/tipo.carta.enum");
const mongoose_1 = require("@nestjs/mongoose");
let Carta = class Carta {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Carta.prototype, "tipo", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Object)
], Carta.prototype, "valor", void 0);
Carta = __decorate([
    (0, mongoose_1.Schema)()
], Carta);
exports.Carta = Carta;
exports.CartaSchema = mongoose_1.SchemaFactory.createForClass(Carta);
//# sourceMappingURL=carta.entity.js.map