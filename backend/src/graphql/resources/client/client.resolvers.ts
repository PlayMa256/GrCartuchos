import { GraphQLResolveInfo } from "graphql";
import { GraphqlContext } from "../../../types";

export const clientResolver = {
	Query: {
		clients: (parent, args, {db}: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Client.findAll()
				.catch((error) => {
					throw new Error(error)
				});
		},
		clientById: (parent, {id}, { db }: GraphqlContext, info: GraphQLResolveInfo) => { 
			return db.Client.findById(id)
				.then((client) => {
					if (!client) {
						throw new Error(`Client with id ${id} not found`)
					}
					return client;
				}).catch((error) => {
					throw new Error(error);
				});
		},
		clientByName: (parent, { name }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Client.findAll({
				where: {
					name: name
				}
			}).catch((error) => {
				throw new Error(error);
			})
		}
	},
	Mutation: {
		createClient: (parent, input, { db }: GraphqlContext, info: GraphQLResolveInfo) => { 
			return db.sequelize.transaction((t) => {
				return db.Client.create(input, {
					transaction: t
				})
			}).catch((error) => {
				throw new Error(error);
			})
		},
		updateClient: (parent, {input, id}, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.sequelize.transaction((t) => {
				return db.Client.findById(id)
					.then((client) => {
						if (!client) {
							throw new Error(`Could not find client ${db}`);
						}
						return client.update(input, {
							transaction: t
						});
					})
			});
		},

		deleteClient: (parent, {id}, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.sequelize.transaction((t) => {
				return db.Client.findById(id)
					.then((client) => {
						if (!client) {
							throw new Error(`Could not find client ${db}`);
						}
						return client.destroy({
							transaction: t
						});
					})
			});
		}
	}
}