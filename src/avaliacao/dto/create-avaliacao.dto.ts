import { IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateAvaliacaoDto {
  @IsOptional()
  @IsString()
  descricao?: string;

  @IsInt()
  @Min(0) 
  @Max(10)
  @IsNotEmpty()
  nota: number;

  @IsNotEmpty()
  avaliadoId: number;

  @IsNotEmpty()
  avaliadorId: number;
}
