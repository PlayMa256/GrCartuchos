import { GraphqlContext } from "../../../types";
import { GraphQLResolveInfo } from "graphql";
import { handleError } from "../../../utils/utils";

export const saleResolvers = {
	Sale: {
		client: (sale, args, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Client.findById(sale.get('client')).catch(handleError);
		},
		product: (sale, args, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Product.findById(sale.get('product')).catch(handleError);
		}
	},
	Query: {
		sales: (parent, input, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Sale.findAll()
				.then((sales) => {
					return sales;
				})
				.catch((err) => {
					throw new Error(err);
				})
		},

		saleyId: (parent, {id}, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Sale.findById(id)
				.then((sale) => {
					return sale;
				})
				.catch((err) => {
					throw new Error(err);
				})
		},

		saleByClientId: (parent, {id}, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Sale.findAll({
				where: {
					client: id
				}
			})
				.then((sale) => {
					return sale;
				})
				.catch((err) => {
					throw new Error(err);
				});
		},

		saleByProductId: (parent, {id}, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Sale.findAll({
				where: {
					product: id
				}
			})
			.then((sale) => {
				return sale;
			})
			.catch((err) => {
				throw new Error(err);
			});
		}
	},
	Mutation: {
		createSale: (parent, { input }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.sequelize.transaction((t) => {
				return db.Sale.create(input, {
					transaction: t
				})
					.then((sale) => {
						return sale;
					})
					.catch((err) => {
						throw new Error(err)
					});
			})
		},
		deleteSale: (parent, { id }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.sequelize.transaction((t) => {
				return db.Sale.findById(id)
					.then((sale) => {
						if (!sale) {
							throw new Error(`sale with id ${id} not found`);
						}
						return sale.destroy({
							transaction: t
						});
					})
					.catch((err) => {
						throw new Error(err);
				})
			})
		}
	}
}