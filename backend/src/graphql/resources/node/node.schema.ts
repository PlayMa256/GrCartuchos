export const NodeType = `
	interface Node {
		id: ID!
	}
`;

export const nodeQueries = `
	node(id: ID!): Node
`