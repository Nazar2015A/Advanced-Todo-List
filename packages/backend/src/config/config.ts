import { DataSourceOptions } from 'typeorm';
import { Todo } from '../entities/Todo';
import { User } from '../entities/User';

const config: DataSourceOptions = {
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT_DB),
  logging: ['query', 'error'],
  type: 'postgres',
  entities: [User, Todo],
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  synchronize: true
};

export default config;
