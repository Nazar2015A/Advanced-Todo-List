import { Strategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import { User } from '../entities/User';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

passport.use(
  new Strategy(options, async (payload, done) => {
    try {
      const user = await User.findOne({ where: { id: payload.id } });

      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (error) {
      return done(error, false);
    }
  })
);

export const authMiddleware = passport.authenticate('jwt', { session: false });
