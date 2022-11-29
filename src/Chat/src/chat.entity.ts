/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  email: string;

  @Column({ unique: true })
  text: string;

  @CreateDateColumn()
  createdAt: Date;
}
