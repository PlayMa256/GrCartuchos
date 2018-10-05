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
			const sales = input.items;
			const results = []
			const client = Buffer.from(input.client, 'base64').toString('ascii').replace('Client', '');
			const salesCreation = sales.map((sale) => {
				return db.sequelize.transaction((t) => {
					const product = Buffer.from(input.client, 'base64').toString('ascii').replace('Product', '');
					return db.Sale.create({
						client: parseInt(client),
						product: parseInt(product, 10),
						quantity: sale.quantity,
						price: sale.price,
						status: "NOT PAID"
					}, {
							transaction: t
						})
						.then((sale) => {
							return sale;
						})
						.catch((error) => console.log(error));
				})
			});

			return Promise.all(salesCreation)
				.then((something) => {
					return Promise.resolve(something);
				})
				.catch((err) => {
					throw new Error(err)
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