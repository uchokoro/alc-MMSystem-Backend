import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: ['src/!**!/entities/!*.entity.ts'],
  migrations: ['src/database/!**!/migrations/!*.ts'],
});

/*
import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  entities: ['src/!**!/entities/!*.entity.ts'],
  migrations: ['src/database/!**!/migrations/!*.ts'],
  synchronize: false,
  type: 'mssql',
});
*/
