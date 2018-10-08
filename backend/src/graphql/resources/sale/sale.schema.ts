export const SaleType = `
	type SaleProductType {
		product: Product
		quantity: Int
		price: String
	}

	type Sale{
		id: ID!
		client: Client!
		items: [SaleProductType]!
		status: String
		paymentDate: String
		createdAt: String
		updatedAt: String
	}

	input SaleInput{
		client: String!
		items: [SaleProductInput]!
		status: String
		paymentDate: String
	}

	input SaleProductInput {
		product: String!
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
	createSale(input: SaleInput): [Sale]
	deleteSale(id: ID!): Boolean
`;