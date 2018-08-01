import { GraphQLResolveInfo } from "graphql";
import { GraphqlContext } from "../../../types";

export const supplierResolvers = {
	Query: {
		suppliers: (parent, input, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Supplier.findAll()
				.then((supplier) => {
					return supplier;
				})
				.catch((err) => {
					throw new Error(err);
				})
		},

		supplierById: (parent, {id}, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Supplier.findById(id)
				.then((supplier) => {
					return supplier;
				})
				.catch((err) => {
					throw new Error(err);
				})
		},

		SupplierByName: (parent, {name}, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Supplier.findAll({
				where: {
					name: name
				}
			})		
			.then((supplier) => {
				return supplier;
			})
			.catch((err) => {
				throw new Error(err);
			})
		}
	},
	Mutation: {
		createSupplier: (parent, { name }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.sequelize.transaction((t) => {
				return db.Supplier.create(name, {
					transaction: t
				});
			})
		},

		deleteSupplier: (parent, { id }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.sequelize.transaction((t) => {
				return db.Supplier.findById(id)
					.then((supplier) => {
						if (!supplier) {
							throw new Error(`Supplier not found for ${id}`);
						}
						return supplier.destroy({
							transaction: t
						});
					});
			})
		}
	}
}