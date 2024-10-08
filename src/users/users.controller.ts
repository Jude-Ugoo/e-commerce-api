import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

// import { AuthGuard } from '@nestjs/passport';
// import { Request } from 'express';

@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
  @Get('me')
  getme(@GetUser() user: User) {
    return user;
  }

  //? BEFORE GUARDS AND DECORATOR ABSTRACTION...
  //   @UseGuards(AuthGuard('jwt'))
  //   @Get('me')
  //   getme(@Req() req: Request) {
  //     return req.user;
  //   }
}
