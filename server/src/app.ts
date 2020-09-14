import express from "express";
import { ApolloServer } from "apollo-server-express";
import buildGraphqlSchema from "./utils/buildGraphqlSchema";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import { __prod__ } from "./constants";
import cors from "cors";

const app = express();

let RedisStore = connectRedis(session);
let redisClient = redis.createClient();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
app.use(
  session({
    name: "qid",
    store: new RedisStore({
      client: redisClient,
      disableTouch: true
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
      httpOnly: true,
      secure: __prod__, // cookie only works in https
      sameSite: "lax" // csrf
    },
    saveUninitialized: false,
    secret: "aosidjfojzxcvoijxcovijije",
    resave: false
  })
);

const schema = buildGraphqlSchema();
const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }) => ({
    req,
    res
  })
});

apolloServer.applyMiddleware({
  app,
  cors: false
});

export default app;
