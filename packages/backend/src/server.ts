import bodyParser from 'body-parser';
import express from 'express';
import passport from 'passport';
import cors from 'cors';
import 'dotenv/config';

import AppRouter from './routes';
import { connectDB } from './config/database';

const app = express();
const router = new AppRouter(app);
// Connect to MongoDB
connectDB();

// Express configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);
app.set('port', process.env.PORT || 4200);
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
