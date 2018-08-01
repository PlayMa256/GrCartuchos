import * as express from "express";
import * as graphqlHttp from "express-graphql";
import schema from "./graphql/schema";
import db from "./models";

export interface AppRequest extends express.Request{
	context?: any
}

class App {
	public express: express.Application;

	constructor() {
		this.express = express();
		this.middleware();
	}

	private middleware(): void {
		this.express.use(
			"/graphql",

			(req, res, next) => {
				req['context'] = {};
				req['context'].db = db;
				next();
			},

			graphqlHttp((req: AppRequest) => ({
				context: req.context,
				graphiql: true,
				schema
			}))
		);
	}
}

export default new App().express;
