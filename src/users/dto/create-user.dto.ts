import { Column } from "typeorm";

export class CreateUserDto {
    @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  phone?: string;

  @Column({ type: 'varchar', nullable: true, unique: true })
  email: string;

  @Column({ default: false, type: 'boolean' })
  phone_verified: boolean;

  @Column({ default: false, type: 'boolean' })
  email_verified: boolean;

  @Column({ type: 'varchar', nullable: true })
  photo: string;

  @Column({ type: 'varchar', nullable: true })
  username: string;

  @Column({ type: 'varchar', nullable: true })
  country: string;

  @Column({ type: 'varchar', nullable: true })
  city: string;

  @Column({ type: 'varchar', nullable: true })
  github: string;

  @Column({ type: 'varchar', nullable: true })
  facebook: string;

  @Column({ type: 'varchar', nullable: true })
  twitter: string;

  @Column({ type: 'varchar', nullable: true })
  linkedin: string;

  @Column({ type: 'varchar', nullable: true })
  website: string;

  @Column({ type: 'varchar', nullable: true })
  bio: string;

  @Column({ type: 'varchar', nullable: true })
  headline: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  dob: Date;

}
