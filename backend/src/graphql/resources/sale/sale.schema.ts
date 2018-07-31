export const SaleType = `
	type Sale{
		id: ID!
		client: Client!
		product: Product!
		quantity: number!
		price: string!
		date: string
		status: string
		paymentDate: string
	}

	type SaleInput{
		client: Client!
		product: Product!
		quantity: number!
		price: string!
		date: string
		status: string
		paymentDate: string
	}
`;

export const saleQueries = `
	sales(): [Sell]
	saleyId(id: ID!): Sale
	saleByClientId(id: ID!): Sale
	saleByProductId(id: ID!): Sale
`;

export const saleMutations = `
	createSale(input: SaleInput): Sale
	deleteSale(id: ID!): Boolean
`;