import { GraphqlContext } from "../../../types";
import { GraphQLResolveInfo } from "graphql";

export const productResolvers = {
	Product: {
		id: (parent, args, { db }: GraphqlContext, info: GraphQLResolveInfo) => { 
			return Buffer.from('' + parent.get('id')).toString('base64');
		}
	},
	Query: {
		products: (parent, input, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Product.findAll()
				.then((products) => {
					return products;
				})
				.catch((err) => {
					throw new Error(err);
			})
		},

		productById: (parent, {id}, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Product.findById(id)
				.then((product) => {
					return product;
				})
				.catch((err) => {
					throw new Error(err);
			})
		}
	},
	Mutation: {
		createProduct: (parent, {input}, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.sequelize.transaction((t) => {
				return db.Product.create(input, {
					transaction: t
				})
					.then((product) => {
						return product;
					})
					.catch((err) => {
						throw new Error(err);
				})
			})
		},
		updateProduct: (parent, { input, id }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.sequelize.transaction((t) => {
				return db.Product.findById(id)
					.then((product) => {
						if (!product) {
							throw new Error(`product ${id} not found`);
						}
						return product.update(input, {
							transaction: t
						});
				})
					.catch((err) => {
						throw new Error(err);
				})
			})
		},
		deleteProduct: (parent, { id }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.sequelize.transaction((t) => {
				return db.Product.findById(id)
					.then((product) => {
						if (!product) {
							throw new Error(`Product with id ${id} not found`);
						}
						return product.destroy({ transaction: t });
					})
			})
		}
	}
}