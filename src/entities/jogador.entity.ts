import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JogadorDocument = Jogador & Document;

@Schema()
export class Jogador {
    @Prop()
    nome: string

    @Prop()
    email: string
}

export const JogadorSchema = SchemaFactory.createForClass(Jogador);