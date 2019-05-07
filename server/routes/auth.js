
import jwt from "jsonwebtoken"
import passport from 'passport'
import server from '../graphqlserver/server.js'


server.express
  .post(
    '/authenticate',
    passport.authenticate('local', {session: false}),
    function(req, res, next) {
      console.log(req.err)
      console.log(req.user)
      console.log(req.info)

      res.send(req.user)
});

// server.express
//     .post(
//         '/authenticate',
//         function(req, res, next) {
//             console.log(res.user)
//             passport.authenticate('local', {session: false}, (err, user, info) => {
//                 console.log(err, user, info)
//                 if (err || !user) {
//                     return res.status(400).json({
//                         message: 'Something is not right',
//                         user   : user
//                     });
//                 }
//                 req.login(user, {session: false}, (err) => {
//                     if (err) {
//                         res.send(err);
//                     }
//                     // generate a signed son web token with the contents of user object and return it in the response
//                     const token = jwt.sign(user, JWT_SECRET);
//                     return res.json({user, token});
//                 });
//             })
//         }
//     );

/* POST login. */
// server.express.post('/login', function (req, res, next) {
//     passport.authenticate('local', {session: false}, (err, user, info) => {
//         if (err || !user) {
//             return res.status(400).json({
//                 message: 'Something is not right',
//                 user   : user
//             });
//         }
//        req.login(user, {session: false}, (err) => {
//            if (err) {
//                res.send(err);
//            }
//            // generate a signed son web token with the contents of user object and return it in the response
//            const token = jwt.sign(user, 'your_jwt_secret');
//            return res.json({user, token});
//         });
//     })(req, res);
// });