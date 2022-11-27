import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from 'src/auth/constants';

export const CoreSec = [
  PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60d' },
  }),
];
