import * as express from "express";
import * as graphqlHttp from "express-graphql";
import schema from "./graphql/schema";
import { extractJwtMiddleware } from "./middlewares/extract-jwt.middleware";
import db from "./models";

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
				req.context.db = db;
				next();
			},

			graphqlHttp(req => ({
				context: req.context,
				graphiql: true,
				schema
			}))
		);
	}
}

export default new App().express;
