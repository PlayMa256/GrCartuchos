import { makeExecutableSchema } from "graphql-tools";
import { Query } from "./query";
import { Mutation } from "./mutation";
import { merge } from 'lodash';
import { ClientType } from "./resources/client/client.schema";
import { MaintenanceType } from "./resources/maintenance/maintenance.schema";
import { ProductType } from "./resources/product/product.schema";
import { SaleType } from "./resources/sale/sale.schema";
import { SupplierType } from "./resources/supplier/supplier.schema";
import { TransactionType } from "./resources/transaction/transaction.schema";
import { clientResolver } from "./resources/client/client.resolvers";
import { productResolvers } from "./resources/product/product.resolvers";
import { saleResolvers } from './resources/sale/sale.resolvers';
import { NodeType } from "./resources/node/node.schema";

const resolvers = merge(
  clientResolver,
  productResolvers,
  saleResolvers
);

const schemaDefinition = `
  type Schema{
    query: Query,
    mutation: Mutation
  }
`;

export default makeExecutableSchema({
  typeDefs: [
    schemaDefinition,
    Query,
    Mutation,
    ClientType,
    MaintenanceType,
    ProductType,
    SaleType,
    SupplierType,
    TransactionType,
    NodeType
  ],
  resolvers
});
