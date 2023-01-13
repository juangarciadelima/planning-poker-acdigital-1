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
exports.HistoriaSchema = exports.Historia = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Historia = class Historia {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Historia.prototype, "idSala", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Historia.prototype, "nome", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Historia.prototype, "votos", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Historia.prototype, "emAberto", void 0);
Historia = __decorate([
    (0, mongoose_1.Schema)({ collection: 'historia' })
], Historia);
exports.Historia = Historia;
exports.HistoriaSchema = mongoose_1.SchemaFactory.createForClass(Historia);
exports.HistoriaSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
});
exports.HistoriaSchema.virtual('id')
    .get(function () {
    return this._id.toHexString();
});
//# sourceMappingURL=historia.entity.js.map