import { BadRequestException, InternalServerErrorException, Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User, UserRoles } from './entities/user.entity';
import { SignupCredentialsDto } from '../auth/dto/signup-credentials.dto';
import * as bcrypt from 'bcrypt';
import { UpdatePasswordDto } from './dto/update-password';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async create(createUserDto: SignupCredentialsDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    createUserDto.password = await this.hashPassword(
      createUserDto.password,
      salt,
    );
    const user = this.userRepository.create({ ...createUserDto, salt });
    return await this.userRepository.save(user);
  }

  /**
   * Get users
   *
   * @return  {Promise<User[]>}
   */
  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find({
      relations: {
        //mentors: true,
        userDetails: true,
      },
      order: { created_at: 'DESC' },
    });
  }

  /**
   * Get mentors
   *
   * @return  {Promise<User[]>} [return user[]]
   */
  async findAllMentors(): Promise<User[]> {
    return await this.userRepository.find({
      relations: {
        mentors: true,
        manager: false,
        userDetails: true,
      },
      where: { role: UserRoles.Mentor },
      order: { created_at: 'DESC' },
    });
  }

  /**
   * Get mentorsManager
   *
   * @return  {Promise<User[]>}
   */
  async findAllMentorsManager(): Promise<User[]> {
    return await this.userRepository.find({
      relations: {
        manager: true,
        mentors: false,
        userDetails: true,
      },
      where: { role: UserRoles.MentorManger },
      order: { created_at: 'DESC' },
    });
  }

  /**
   * Get mentors Manager approved
   *
   * @return  {Promise<User[]>} [return User[]]
   */
  async findAllManagerAppr(): Promise<User[]> {
    return await this.userRepository.find({
      relations: {
        manager: true,
        mentors: false,
        userDetails: true,
      },
      where: {
        role: UserRoles.MentorManger,
        userDetails: {
          approved: true,
        },
      },
    });
  }

  /**
   * Get mentors approved
   *
   * @return  {Promise<User[]>} [return User]
   */
  async findAllMentorsAppr(): Promise<User[]> {
    return await this.userRepository.find({
      relations: {
        manager: false,
        mentors: true,
        userDetails: true,
      },
      where: {
        role: UserRoles.Mentor,
        userDetails: {
          approved: true,
        },
      },
    });
  }

  /**
   * Get mentors Manager approved
   *
   * @return  {Promise<User[]>} [return User[]]
   */
  async findAllManagerApplicant(): Promise<User[]> {
    return await this.userRepository.find({
      relations: {
        manager: true,
        mentors: false,
        userDetails: true,
      },
      where: {
        role: UserRoles.MentorManger,
        userDetails: {
          approved: false,
        },
      },
    });
  }

  /**
   * Get mentors approved
   *
   * @return  {Promise<User[]>} [return User]
   */
  async findAllMentorsApplicant(): Promise<User[]> {
    return await this.userRepository.find({
      relations: {
        manager: false,
        mentors: true,
        userDetails: true,
      },
      where: {
        role: UserRoles.Mentor,
        userDetails: {
          approved: false,
        },
      },
    });
  }

 
  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    try {
      const user = await this.userRepository.update(
        {
          id: +id,
        },
        { ...updateUserDto },
      );

      if (!user) {
        throw new NotFoundException(`User does not exist`);
      }
      return user;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async updatePassword(createUserDto: UpdatePasswordDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    createUserDto.password = await this.hashPassword(
      createUserDto.password,
      salt,
    );
    const user = this.userRepository.create({ ...createUserDto, salt });
    return await this.userRepository.save(user);
  }

  findAll() {
    return `This action returns all users`;
  }

  /* findOne(id: number) {
    return `This action returns a #${id} user`;
  }*/

  async findOne(param = {}): Promise<User> {
    return await this.userRepository.findOne({ where: param });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id}  ${updateUserDto}user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
