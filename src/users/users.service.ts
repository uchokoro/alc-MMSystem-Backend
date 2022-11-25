import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRoles } from './entities/user.entity';
import { SignupCredentialsDto } from '../auth/dto/signup-credentials.dto';
import { EMAIL_ALREADY_EXISTS } from 'src/utils/constants';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: SignupCredentialsDto): Promise<User> {
    try {
      const user = this.userRepository.create(createUserDto);
      return await this.createOrUpdate(user);
    } catch (e) {
      throw e.code === 'ER_DUP_ENTRY'
        ? new ConflictException(EMAIL_ALREADY_EXISTS)
        : e;
    }
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
      where: { role: UserRoles.MentorManager },
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
        role: UserRoles.MentorManager,
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
        role: UserRoles.MentorManager,
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

  async createOrUpdate(user: User) {
    return await this.userRepository.save(user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
