/* eslint-disable no-console */

import { DataSource } from 'typeorm';

import config from './config';

const dataSource = new DataSource(config);

const connectDB = async () => {
  try {
    await dataSource.initialize();
    console.log('PostgreSQL Connected.');
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export { connectDB, dataSource };
