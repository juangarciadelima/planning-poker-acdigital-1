import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { SalaService } from './sala.service';
import { Sala as SalaModel } from '../../models/sala'
import { Result } from 'src/models/result';

@Controller('sala')
export class SalaController {
  constructor(
    private readonly salaService: SalaService
    ) {}

  @ApiOkResponse({type: SalaModel})
  @Get(':administrador')
  async administrador(@Param('administrador') email: string): Promise<SalaModel[]> {
    try{
      return this.salaService.buscarSalas(email);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a chamada', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOkResponse({type: SalaModel})
  @Get(':id')
  async buscarPorId(@Param('id') id: string): Promise<SalaModel> {
    try{
      return this.salaService.buscarPorId(id);
    }catch(error){
      throw new HttpException(new Result('Não foi possivel realizar a chamada', false, null, error), 
                              HttpStatus.BAD_REQUEST);
    }
  }
}
