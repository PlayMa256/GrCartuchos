import * as Sequelize from "sequelize";

export interface SaleItemsAttributes {
	saleId: string;
	product: string | number;
	quantity: number;
	price: string;
}

export interface SaleItemsInstance extends Sequelize.Instance<SaleItemsAttributes> {}

export interface SaleItemsModel
	extends Sequelize.Model<SaleItemsInstance, SaleItemsAttributes> {}

export default (
	sequelize: Sequelize.Sequelize,
	DataTypes: Sequelize.DataTypes
): SaleItemsModel => {
	const SaleItem: SaleItemsModel = sequelize.define(
		"SaleItem",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true
			},
			saleId: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			product: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			quantity: {
				type: DataTypes.DECIMAL,
				allowNull: false
			},
			price: {
				type: DataTypes["DOUBLE"],
				allowNull: false
			}
		},
		{
			tableName: "saleItems"
		}
	);

	SaleItem.associate = (models): void => {
		SaleItem.belongsTo(models.Sale, {
			foreignKey: {
				allowNull: false,
				field: "saleId",
				name: "saleId"
			}
		});
	};

	return SaleItem;
};
