const passport = require("passport");
const {prisma}=require("./lib/prisma")
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
     try {
      const user = await prisma.user.findUnique({ where: { id: jwt_payload.id } }); //jwt_payload will be passed to JwtStrategy after .authenticate() verify
      if (!user) return done(null, false);   
      return done(null, user);          
    } catch (err) {
      return done(err, false);            
    }
}));

module.exports = passport;