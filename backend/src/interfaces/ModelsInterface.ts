import { ClientModel } from "../models/ClientModel";
import { ProductModel } from "../models/ProductModel";
import { SupplierModel } from "../models/SupplierModel";
import { TransactionModel } from "../models/TransactionModel";
import { MaintenanceModel } from "../models/MaintenaceModel";
import { SellModel } from "../models/SellModel";

export interface ModelsInterface {
	Client: ClientModel;
	Product: ProductModel;
	Supplier: SupplierModel;
	Transaction: TransactionModel;
	Maintenance: MaintenanceModel;
	Sell: SellModel;
}
