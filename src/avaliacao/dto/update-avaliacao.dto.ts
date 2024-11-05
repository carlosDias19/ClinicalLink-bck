import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateAvaliacaoDto {
  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(10)
  nota?: number; 

  @IsOptional()
  avaliadoId?: number;

  @IsOptional()
  avaliadorId?: number;
}
