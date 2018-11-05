export const ClientType = `
	type Client{
		id: ID!
		name: String!
		cnpj: String
		ie: String
	}
	input ClientInput {
		name: String!
		cnpj: String
		ie: String
	}
`;

export const clientQueries = `
	clients: [Client]
	clientById(id: ID!): Client
	clientByName(name: String): Client
`;

export const clientMutations = `
	createClient(name: String!, cnpj: String, ie: String): Client
	updateClient(input: ClientInput, id: ID): Client
	deleteClient(id: ID!): Boolean
`;