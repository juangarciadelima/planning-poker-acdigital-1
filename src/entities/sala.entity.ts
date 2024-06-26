import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Historia } from './historia.entity';
import { Administrador } from './administrador.entity';
import { Jogador } from './jogador.entity';

export type SalaDocument = Sala & Document;

@Schema({ collection: 'Salas' })
export class Sala {
  @Prop()
  nome: string;

  @Prop()
  jogadores?: Jogador[];

  @Prop()
  administrador: Administrador;

  @Prop()
  revelarVotos: boolean;

  @Prop()
  metodologiaSelecionada: string;
}

export const SalaSchema = SchemaFactory.createForClass(Sala);

SalaSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
});

SalaSchema.virtual('id').get(function () {
  return this._id.toHexString();
});
