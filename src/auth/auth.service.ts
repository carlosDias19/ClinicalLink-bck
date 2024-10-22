// import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt'
// import { UserService } from 'src/user/user.service';

// @Injectable()
// export class AuthService {
//   constructor(
//     private readonly userService: UserService,
//     private readonly jwtService: JwtService
//   ) {}

//   async signIn(
//     email: string,
//     pass: string,
//   ): Promise<{ access_token: string }> {
//     const user = await this.userService.findByEmail(email);
    
//     if (!user) {
//       throw new NotFoundException("Usuário não encontrado");
//     }

//     const isMatch = await bcrypt.compare(pass, user.password);
//     if (!isMatch) {
//       throw new UnauthorizedException();
//     }

//     const payload = { user };
//     return {
//       access_token: await this.jwtService.signAsync(payload),
//     };
//   }
// }
