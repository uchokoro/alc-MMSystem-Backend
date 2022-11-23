import { User } from '../users/entities/user.entity';
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message extends BaseEntity{
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public content: string;

  @ManyToOne(() => User)
  public author: User;
}
