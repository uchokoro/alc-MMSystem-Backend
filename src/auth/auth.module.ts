import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { CoreSec } from 'src/utils/security';
import { MailService } from '../common/mail/mail.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [UsersModule, ...CoreSec],
  providers: [AuthService, JwtStrategy, MailService, ConfigService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
