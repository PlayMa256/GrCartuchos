import { GraphqlContext } from "../../../types";
import { GraphQLResolveInfo } from "graphql";

export const transactionResolvers = {
	Query: {
		transactions: (parent, { id }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Transaction.findAll()
				.then((transactions) => {
					return transactions;
				})
				.catch((err) => {
					throw new Error(err);
				})
		},

		transactionById: (parent, { id }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Transaction.findById(id)
			.then((transaction) => {
				return transaction;
			})
			.catch((err) => {
				throw new Error(err);
			})
		},

		transactionByClient: (parent, { client }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Transaction.findAll({
				where: {
					client: client
				}
			})
			.then((transaction) => {
				return transaction;
			})
			.catch((err) => {
				throw new Error(err);
			})
		}
	},
	Mutation: {
		createTransaction: (parent, { input }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.sequelize.transaction((t) => {
				return db.Transaction.create(input, {
					transaction: t
				});
			});
		},

		updateTransaction: (parent, { input, id }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.sequelize.transaction((t) => {
				return db.Transaction.findById(id)
					.then((transaction) => {
						if (!transaction) {
							throw new Error(`Transaction with id ${id} not found`);
						}
						return transaction.update(input, {
							transaction: t
						});
					});
			})
		},

		deleteTransaction: (parent, { id }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.sequelize.transaction((t) => {
				return db.Transaction.findById(id)
					.then((transaction) => {
						if (!transaction) {
							throw new Error(`Transaction with id ${id} not found`);
						}
						return transaction.destroy({
							transaction: t
						});
					});
			})
		},
	}
}