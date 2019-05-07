require("dotenv").config();
import mongoose from "mongoose";
import passport from 'passport'
import bodyParser from 'body-parser';[]
import uuid from 'node-uuid'

import server from './graphqlserver/server.js'

import './passport.js'
import './routes/auth.js'

const { PORT, EXPRESS_SESSION_SECRET } = process.env

const { mongoURI: db } = process.env;

const options = {
  port: PORT || "4000",
  endpoint: "/api",
  subscriptions: "/subscriptions",
  playground: "/playground"
};

// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));



server.start(options, ({ port }) => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
