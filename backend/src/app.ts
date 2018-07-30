import * as express from "express";
import * as graphqlHttp from "express-graphql";
import db from './models'
import schema from "./graphql/schema";
import { extractJwtMiddleware } from "./middlewares/extract-jwt.middleware";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
  }

  private middleware(): void {
    this.express.use(
      "/graphql",

      extractJwtMiddleware(),

      (req, res, next) => {
        req['context'].db = db;
        next();
      },

      graphqlHttp((req) => ({
        schema,
        graphiql: true,
        context: req['context']
      }))
    );
  }
}

export default new App().express;