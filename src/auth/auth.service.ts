import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInCredentialsDto } from './dto/signin-credentials.dto';
import { JwtPayload } from './interface/jwt-payload.interface';
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(
    signInCredentialsDto: SignInCredentialsDto,
  ): Promise<{ accessToken: string; user: User }> {
    const { email, password } = signInCredentialsDto;
    let resp = await this.userService.findOne({ email });
    if (!resp) {
      resp = await this.userService.findOne({ username: email });
    }

    if (!resp) {
      resp = await this.userService.findOne({ phone: email });
    }
    if (!resp) {
      throw new UnauthorizedException('Invalid credentials');
    }
    if (resp && (await resp.validatePassword(password))) {
      const payload: JwtPayload = {
        id: resp.id,
        first_name: resp.first_name,
        last_name: resp.last_name,
        email: resp.email,
        phone: resp.phone,
        role: resp.role,
        username: resp.username,
        photo: resp.phone,
      };
      const accessToken = this.jwtService.sign(payload);

      return {
        accessToken,
        user: resp,
      };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
