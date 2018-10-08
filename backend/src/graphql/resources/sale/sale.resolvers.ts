import { GraphqlContext } from "../../../types";
import { GraphQLResolveInfo } from "graphql";
import { handleError } from "../../../utils/utils";

export const saleResolvers = {
	Sale: {
		client: (sale, args, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Client.findById(sale.get('client'))
				.then((client) => {
					return client;
				})
				.catch(handleError);
		},
		items: (sale, args, { db }: GraphqlContext, info: GraphQLResolveInfo) => { 
			const saleId = sale.get('id');
			return db.SaleItem.findAll({
				where: {
					saleId
				}
			})
		}
	},
	SaleProductType: {
		product: async (parent, args, { db }: GraphqlContext, info: GraphQLResolveInfo) => { 
			const productId = parent.get('product');
			const product = await db.Product.findById(productId);
			return product;
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
					// @ts-ignore
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
			const client = Buffer.from(input.client, 'base64').toString('ascii').replace('Client', '');
			
			const salesCreation = sales.map((sale) => {
				const product = Buffer.from(input.client, 'base64').toString('ascii').replace('Product', '');
				return db.Sale.create({
					client: parseInt(client),
					status: "NOT PAID"
				})
					.then((s) => {
						const saleId = s.get('id');
							return db.SaleItem.create({
								product: parseInt(product, 10),
								quantity: sale.quantity,
								price: sale.price,
								saleId
							})
					})
					.catch((error) => console.log(error));
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