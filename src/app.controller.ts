import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
// import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  getProfile(@Request() req) {
    return req.user;
  }
}
