

import passport from 'passport';
import { models } from './config/db';
import server from './graphqlserver/server.js'
import bodyParser from 'body-parser'

let LocalStrategy = require("passport-local").Strategy

const { User } = models

const localStrategy = new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
    }, 
    async function(username, password, done) {
    console.log(username, password)

    const user = await User
        .findOne({ 'email': username })
        .exec(function(err, user) {
            if(err) {
                done(err, null)
            }
            if(!user) {
                done(null, null, { message: "User not found" })
            }
            return done(null, user, { message: "User Login Successfully" })
        })
})

passport.use('local', localStrategy);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User
        .find({ "id": id})
        .exec( function(err, user) {
            return done(err, user);
        });
});

server.express.use(passport.initialize());
server.express.use(passport.session());
server.express.use(bodyParser.urlencoded({ extended: true }) );