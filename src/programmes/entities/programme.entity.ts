import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Task } from '../../tasks/entities/task.entity';
import { Report } from '../../reports/entities/report.entity';

export class Criteria {}

@Entity('programmes')
export class Programme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @OneToMany(() => Task, (task) => task.programme)
  tasks: Task[];

  @OneToMany(() => Report, (report) => report.programme)
  reports: Report[];

  @Column({ type: 'varchar', nullable: true })
  image: string;

  @Column({ nullable: true })
  date_completed?: Date;

  @Column({ nullable: true })
  date_archived?: Date;

  @Column({ type: 'text', nullable: true })
  criteria: Criteria;

  @Column()
  @CreateDateColumn()
  created_at?: Date;

  @Column()
  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  @DeleteDateColumn()
  deleted_at: Date;
}
