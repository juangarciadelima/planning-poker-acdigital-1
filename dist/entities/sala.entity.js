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
exports.SalaSchema = exports.Sala = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const administrador_entity_1 = require("./administrador.entity");
let Sala = class Sala {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Sala.prototype, "nome", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Sala.prototype, "jogadores", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", administrador_entity_1.Administrador)
], Sala.prototype, "administrador", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Sala.prototype, "revelarVotos", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Sala.prototype, "metodologiaSelecionada", void 0);
Sala = __decorate([
    (0, mongoose_1.Schema)({ collection: 'sala' })
], Sala);
exports.Sala = Sala;
exports.SalaSchema = mongoose_1.SchemaFactory.createForClass(Sala);
exports.SalaSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
});
exports.SalaSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
//# sourceMappingURL=sala.entity.js.map