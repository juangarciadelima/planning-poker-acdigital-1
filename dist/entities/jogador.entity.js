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
exports.JogadorSchema = exports.Jogador = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Jogador = class Jogador {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Jogador.prototype, "nome", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Jogador.prototype, "email", void 0);
Jogador = __decorate([
    (0, mongoose_1.Schema)({ collection: 'jogador' })
], Jogador);
exports.Jogador = Jogador;
exports.JogadorSchema = mongoose_1.SchemaFactory.createForClass(Jogador);
exports.JogadorSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
});
exports.JogadorSchema.virtual('id')
    .get(function () {
    return this._id.toHexString();
});
//# sourceMappingURL=jogador.entity.js.map