import { clientQueries } from "./resources/client/client.schema";
import { maintenanceQueries } from "./resources/maintenance/maintenance.schema";
import { productQueries } from "./resources/product/product.schema";
import { saleQueries } from "./resources/sale/sale.schema";
import { supplierQueries } from "./resources/supplier/supplier.schema";
import { transactionQueries } from "./resources/transaction/transaction.schema";

export const Query = `
	type Query{
		${clientQueries}
		${maintenanceQueries}
		${productQueries}
		${saleQueries}
		${supplierQueries}
		${transactionQueries}
	}
`;