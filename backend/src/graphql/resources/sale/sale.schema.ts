export const SaleType = `
	type Sale{
		id: ID!
		client: Client!
		product: Product!
		quantity: Int!
		price: String!
		date: String
		status: String
		paymentDate: String
	}

	type SaleInput{
		client: Client!
		product: Product!
		quantity: Int!
		price: String!
		date: String
		status: String
		paymentDate: String
	}
`;

export const saleQueries = `
	sales: [Sale]
	saleyId(id: ID!): Sale
	saleByClientId(id: ID!): Sale
	saleByProductId(id: ID!): Sale
`;

export const saleMutations = `
	createSale(input: SaleInput): Sale
	deleteSale(id: ID!): Boolean
`;