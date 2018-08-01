import { GraphQLResolveInfo } from "graphql";
import { GraphqlContext } from "../../../types";

export const maintenanceResolvers = {
	Query: {
		maintenances: (parent, args, { db }: GraphqlContext, info: GraphQLResolveInfo) => { 
			return db.Maintenance.findAll()
				.then((Maintenances) => {
					return Maintenances;
				}).catch((err) => {
					throw new Error(err);
			})
		},

		maintenanceById: (parent, {id}, { db }: GraphqlContext, info: GraphQLResolveInfo) => { 
			return db.Maintenance.findById(id)
				.then((maintenance) => {
					return maintenance;
				}).catch((err) => {
					throw new Error(err);
			})
		},

		maintenancePerClientId: (parent, {client}, { db }: GraphqlContext, info: GraphQLResolveInfo) => { 
			return db.Maintenance.findAll({
				where: {
					client: client
				}
			})
			.then((maintenances) => {
				return maintenances;
			})
			.catch((err) => {
					throw new Error(err);
			})
		},

		maintenancePerSupplier: (parent, {supplier}, { db }: GraphqlContext, info: GraphQLResolveInfo) => { 
			return db.Maintenance.findAll({
				where: {
					supplier: supplier
				}
			})
			.then((maintenances) => {
				return maintenances;
			})
			.catch((err) => {
					throw new Error(err);
			})
		},

		maintenancePerProduct: (parent, {product}, { db }: GraphqlContext, info: GraphQLResolveInfo) => { 
			return db.Maintenance.findAll({
				where: {
					product: product
				}
			})
			.then((maintenances) => {
				return maintenances;
			})
			.catch((err) => {
					throw new Error(err);
			})
		},
	},
	Mutation: {
		createMaintenance: (parent, { input }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.Maintenance.create(input)
				.then((maintenance) => {
					return maintenance;
				})
				.catch((err) => {
					throw new Error(err);
			})
		},

		updateMaintenance: (parent, { input, id }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.sequelize.transaction((t) => {
				return db.Maintenance.findById(id)
					.then((maintenance) => {
						if (!maintenance) {
							throw new Error(`Maintenance not found, ${id}`);
						}

						return maintenance.update(input, {
							transaction: t
						});
					}).catch((err) => {
						throw new Error(err);
				})
			})
		},

		deleteMaintenance: (parent, { id }, { db }: GraphqlContext, info: GraphQLResolveInfo) => {
			return db.sequelize.transaction((t) => {
				return db.Maintenance.findById(id)
					.then((maintenance) => {
						if (!maintenance) {
							throw new Error(`Maintenance ${id} not found`);
						}
						return maintenance.destroy({ transaction: t });
				})
			})
		},
	}
}