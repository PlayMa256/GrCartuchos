export const ProductType = `
	type Product{
		id: ID!
		name: String!
		date: String
	}

	type ProductInput{
		name: String!
		date: String
	}
`;

export const productQueries = `
	products: [Product]
	productById(id: ID!): Product
`;

export const productMutations = `
	createProduct(input: ProductInput): Product
	updateProduct(input: ProductInput): Product
	deleteProduct(id: ID!): Boolean
`;