const { Strategy, ExtractJwt } = require('passport-jwt');

module.exports = passport => {
  passport.use(new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  }, async (payload, done) => {
    try {
      return done(null, payload);
    } catch (err) {
      done(err, false);
    }
  }));
};
