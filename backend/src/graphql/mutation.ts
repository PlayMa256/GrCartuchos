import { clientMutations } from "./resources/client/client.schema";
import { maintenanceMutations } from "./resources/maintenance/maintenance.schema";
import { productMutations } from "./resources/product/product.schema";
import { saleMutations } from "./resources/sale/sale.schema";
import { supplierMutations } from "./resources/supplier/supplier.schema";
import { transactionMutations } from "./resources/transaction/transaction.schema";

export const Mutation = `
	type Mutation{
		${clientMutations}
		${maintenanceMutations}
		${productMutations}
		${saleMutations}
		${supplierMutations}
		${transactionMutations}
	}
`;