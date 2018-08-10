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

	input SaleInput{
		client: String!
		items: [SaleProductInput]!
		date: String
		status: String
		paymentDate: String
	}

	input SaleProductInput {
		product: ProductInput!
		quantity: Int!
		price: String!
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