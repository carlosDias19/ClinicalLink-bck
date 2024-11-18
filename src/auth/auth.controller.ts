import { Response as ExpressResponse } from 'express';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Response,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { SignInDto } from './dto/signIn-dto.dto';

@Controller('authenticate')
@ApiTags('authenticate')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  async signIn(@Body() signInDto: SignInDto, @Response() res: ExpressResponse) {
    const token = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );
    res.setHeader('Authorization', `Bearer ${token}`).json(token);
    res.send();
  }
}
