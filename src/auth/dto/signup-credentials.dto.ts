import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsEmail,
  IsNotEmpty,
} from 'class-validator';

export class SignupCredentialsDto {
  @ApiProperty({ minimum: 4, maximum: 20, nullable: true })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username?: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ nullable: true })
  role?: string;

  @ApiProperty({ nullable: true })
  gender?: string;

  @ApiProperty({ nullable: true })
  dob?: Date;

  @ApiProperty({
    minimum: 6,
    maximum: 20,
    description: 'At least 1 capital, 1 small, 1 special character & 1 number.',
  })
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\w+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak',
  })
  password: string;
}
