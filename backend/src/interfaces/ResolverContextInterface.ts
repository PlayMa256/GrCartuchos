import { DbConnection } from "./DbConnectionInterface";

export interface ResolverContext {
	db?: DbConnection;
}