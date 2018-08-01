export const MaintenanceType = `
	type Maintenance{
		id: ID!
		client: Client
		supplier: Supplier
		product: Product
		date: String
		comment: String
	}

	input MaintenanceInput{
		client: ClientInput
		supplier: SupplierInput
		product: ProductInput
		date: String
		comment: String
	}
`;

export const maintenanceQueries = `
	maintenances: [Maintenance]
	maintenanceById(id: ID!): Maintenance
	maintenancePerClientId(client: ID!): Maintenance
	maintenancePerSupplier(supplier: ID!): Maintenance
	maintenancePerProduct(product: ID!): Maintenance
`;

export const maintenanceMutations = `
	createMaintenance(input: MaintenanceInput): Maintenance
	updateMaitenance(input: MaintenanceInput): Maintenance
	deleteMaintenance(id: ID!): Boolean
`;