import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('reports')
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

<<<<<<< HEAD
  @Column({ type: 'enum', enum: ReportType, default: ReportType.PROGRAMME_REPORT, })
  type: ReportType;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'text' })
  achievements: string;

  @Column({ type: 'text' })
  blocker: string;

  @Column({ type: 'text' })
  recommendations: string;

  @OneToOne(() => Task, { nullable: true, })
  @JoinColumn()
  task: Task;

  @ManyToOne(() => Programme, (programme) => programme.reports, { nullable: true, })
  programme: Programme;

  @ManyToOne(() => User)
  created_by: User;

=======
>>>>>>> e5d180750e7e59c80b98a09668bcbfec720483ea
  @Column()
  @CreateDateColumn()
  created_at?: Date;

<<<<<<< HEAD
  @ManyToOne(() => User, { nullable: true, })
  updated_by: User;

=======
>>>>>>> e5d180750e7e59c80b98a09668bcbfec720483ea
  @Column()
  @UpdateDateColumn()
  updated_at: Date;

<<<<<<< HEAD
  @ManyToOne(() => User, { nullable: true, })
  deleted_by: User;

=======
>>>>>>> e5d180750e7e59c80b98a09668bcbfec720483ea
  @Column()
  @DeleteDateColumn()
  deleted_at: Date;
}
