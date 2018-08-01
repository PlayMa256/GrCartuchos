export const SupplierType = `
	type Supplier{
		id: ID!
		name: String!
	}
`;

export const supplierQueries = `
	suppliers: [Supplier]
	supplierById(id: ID!): Supplier
	SupplierByName(name: String!): Supplier
`;

export const supplierMutations = `
	createSupplier(name: String!): Supplier
	deleteSupplier(id: ID!): Boolean
`;