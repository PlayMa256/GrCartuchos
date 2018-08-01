export const TransactionType = `
	type Transaction{
		id: ID!
		client: Client!
		value: Float!
		date: String
	}
	type TransactionInput{
		client: Client!
		value: Float!
		date: String
	}
`;

export const transactionQueries = `
	transactions: [Transaction]
	transactionById(id: ID!): Transaction
	transactionByClient(client: ID!): Transaction
`;

export const transactionMutations = `
	createTransaction(input: TransactionInput): Transaction
	updateTransaction(input: TransactionInput): Transaction
	deleteTransaction(id: ID!): Boolean
`;